import { memo, useEffect, useMemo, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { useBinanceTradeStream } from 'app/hooks/useBinanceTradeStream';
import TokenPickerModal from '../TokenPickerModal/TokenPickerModal';
import { tokenTickerDetails } from './constants';

import downIco from 'app/assets/images/down.png';
import './index.scss';

type Inputs = {
  investment: number;
  returns: number;
};

function TradeView() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' });
  const investment = watch('investment');

  const [selectedToken, selectToken] = useState('ethusdt');
  const [isTokenPickerOpen, openTokenPicker] = useState(false);

  const seletedTokenDetails = tokenTickerDetails[selectedToken];
  const selectedTokenIcon = seletedTokenDetails.icon;

  const priceData = useBinanceTradeStream({
    tradePair: `${seletedTokenDetails.ticker}@trade`,
  });

  const currentValue = useMemo(
    () => (priceData.isConnecting ? 0 : priceData.price.toFixed(2)),
    [priceData.isConnecting, priceData.price],
  );

  useEffect(() => {
    if (priceData.isConnecting || investment < 0) {
      setValue('returns', 0);
      return;
    }
    setValue(
      'returns',
      Number((investment / Number(currentValue)).toFixed(2)) || 0,
    );
  }, [currentValue, investment, setValue, priceData.isConnecting]);

  const onTokenPickerClose = (selectedTicker: string) => {
    if (!selectedTicker || selectedTicker === selectedToken) {
      openTokenPicker(false);
      return;
    }

    reset();
    priceData.closeConn();
    openTokenPicker(false);
    selectToken(selectedTicker);
  };

  const onTokenPickerOpen = () => {
    openTokenPicker(true);
  };

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <div className="view">
      <div className="swapper">
        <div className="content-box pt-5">
          <div className="row justify-content-between">
            <p className="col-5 ms-5">Current value</p>
            <p className="col text-end me-5">
              ₹ {priceData.isConnecting ? '--' : currentValue}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="pt-2 ms-5">
            <div
              className="row mb-4 mx-1 form-control d-flex align-items-center justify-content-between cursor-pointer"
              onClick={onTokenPickerOpen}
            >
              <div className="row token-selector w-100  p-0">
                <img className="col p-0" src={selectedTokenIcon} alt="token" />
                <p className="m-0 col-8 tokenName">
                  {seletedTokenDetails.name}{' '}
                </p>
                <img className="col" src={downIco} alt="DropDown" />
              </div>
            </div>

            <div className="row mb-4">
              <label className="invest-input">
                Amount you want to invest
                <input
                  className="form-control mt-1 "
                  placeholder="0.00"
                  maxLength={30}
                  pattern="\d*"
                  onKeyDown={e =>
                    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
                  }
                  {...register('investment', {
                    pattern: {
                      value: /(?<=^| )\d+(\.\d+)?(?=$| )/,
                      message: 'Invalid number',
                    },
                    min: {
                      message: 'Investment cannot be negative.',
                      value: 0,
                    },
                  })}
                  type="number"
                />
              </label>
              <ErrorMessage
                errors={errors}
                name="investment"
                render={({ message }) => (
                  <p className="my-0 text-danger">{message}</p>
                )}
              />
            </div>

            <div className="row">
              <label>
                Estimate Number of {seletedTokenDetails?.symbol} You will get
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="0.00"
                  {...register('returns')}
                  disabled
                />
              </label>
            </div>

            <button
              type="submit"
              className="submit-button d-flex align-items-center justify-content-center mt-4 form-control"
            >
              Buy
            </button>
          </form>
        </div>
        <div className="floating-icon">
          <img src={selectedTokenIcon} alt="Token icon" />
        </div>
        <TokenPickerModal
          isOpen={isTokenPickerOpen}
          defaultValue={seletedTokenDetails.ticker}
          requestClose={onTokenPickerClose}
          tokenList={Object.values(tokenTickerDetails)}
        />
      </div>
    </div>
  );
}

export default memo(TradeView);
