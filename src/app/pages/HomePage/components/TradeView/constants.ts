import ethIco from 'app/assets/images/eth-ico.png';
import btcIco from 'app/assets/images/bitcoin.png';
import solIco from 'app/assets/images/solana.png';

export type TokenDetails = {
  name: string;
  symbol: string;
  ticker: string;
  icon: string;
};

export const tokenTickerDetails: Record<string, TokenDetails> = {
  ethusdt: {
    name: 'Ethereum',
    symbol: 'ETH',
    ticker: 'ethusdt',
    icon: ethIco,
  },
  btcusdt: {
    name: 'Bitcoin',
    symbol: 'BTC',
    ticker: 'btcusdt',
    icon: btcIco,
  },
  maticusdt: {
    name: 'Polygon',
    symbol: 'Matic',
    ticker: 'maticusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png',
  },
  bnbusdt: {
    name: 'Binance',
    symbol: 'BNB',
    ticker: 'bnbusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
  },
  xrpusdt: {
    name: 'Ripple',
    symbol: 'XRP',
    ticker: 'xrpusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
  },
  solusdt: {
    name: 'Solana',
    symbol: 'SOL',
    ticker: 'solusdt',
    icon: solIco,
  },
  dogeusdt: {
    name: 'Doge',
    symbol: 'DOGE',
    ticker: 'dogeusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png',
  },
  adausdt: {
    name: 'Cardano',
    symbol: 'ADA',
    ticker: 'adausdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
  },
  wbtcusdt: {
    name: 'Wrapped Bitcoin',
    symbol: 'DOGE',
    ticker: 'wbtcusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png',
  },
  ltcusdt: {
    name: 'Litecoin',
    symbol: 'LTC',
    ticker: 'ltcusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png',
  },
  bchusdt: {
    name: 'Bitcoin Cash',
    symbol: 'BCH',
    ticker: 'bchusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png',
  },
  shibusdt: {
    name: 'Shiba Inu',
    symbol: 'SHIB',
    ticker: 'shibusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png',
  },
  avaxusdt: {
    name: 'Avalanche',
    symbol: 'AVAX',
    ticker: 'avaxusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  },
  ftmusdt: {
    name: 'Fantom',
    symbol: 'FTM',
    ticker: 'ftmusdt',
    icon: 'https://fantomfoundation-prod-wp-website.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2021/10/25080204/Group-322.svg',
  },
  atomusdt: {
    name: 'Cosmos',
    symbol: 'ATOM',
    ticker: 'atomusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png',
  },
  uniusdt: {
    name: 'Uniswap',
    symbol: 'UNI',
    ticker: 'uniusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png',
  },
  etcusdt: {
    name: 'Ethereum Classic',
    symbol: 'ETC',
    ticker: 'etcusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1321.png',
  },
  filusdt: {
    name: 'Filecoin',
    symbol: 'FIL',
    ticker: 'filusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2280.png',
  },
  hbarusdt: {
    name: 'Hedera',
    symbol: 'HBAR',
    ticker: 'hbarusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4642.png',
  },
  mkrusdt: {
    name: 'Maker',
    symbol: 'MKR',
    ticker: 'mkrusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1518.png',
  },
  aaveusdt: {
    name: 'Aave',
    symbol: 'AAVE',
    ticker: 'aaveusdt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png',
  },
};
