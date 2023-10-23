import { useCallback, useEffect, useMemo, useState } from 'react';
import throttle from 'lodash.throttle';

// Ws response type
type Pricedata = {
  e: string; // Event type
  E: number; // Event time
  s: string; // Symbol
  t: number; // Trade ID
  p: string; // Price
  q: string; // Quantity
  b: number; // Buyer order ID
  a: number; // Seller order ID
  T: number; // Trade time
  m: boolean; // Is the buyer the market maker?
  M: boolean; // Ignore
};

export const useBinanceTradeStream = ({ tradePair }: { tradePair: string }) => {
  const [price, setPrice] = useState(0);
  const [isConnecting, setConnecting] = useState(false);

  // since ws updates are less than 1s, it is throttled to 1s
  // so that it won't over feed data into the component
  const throttledPriceUpdate = useMemo(() => throttle(setPrice, 1000), []);

  const ws = useMemo(() => {
    setConnecting(true);
    return new WebSocket(`wss://stream.binance.com:443/ws/${tradePair}`);
  }, [tradePair]);

  useEffect(() => {
    ws.onopen = () => {
      console.log('open');
      setConnecting(false);
    };

    ws.onmessage = event => {
      const priceData: Pricedata = JSON.parse(event.data);
      // Note: here 80 represents the Usd to inr price
      throttledPriceUpdate(Number(Number(priceData.p)) * 80);
    };

    ws.onerror = event => {
      console.log(event);
    };
  }, [throttledPriceUpdate, ws]);

  const closeConn = useCallback(() => {
    setPrice(0);
    if (ws.readyState !== ws.CLOSED) {
      ws.close();
    }
  }, [ws]);

  return {
    closeConn,
    ws,
    price,
    isConnecting,
  };
};
