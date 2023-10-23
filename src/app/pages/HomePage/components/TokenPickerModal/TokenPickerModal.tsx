import { memo, useCallback, useMemo, useState } from 'react';
import Modal from 'react-modal';
import closeIco from 'app/assets/images/close.svg';
import searchIco from 'app/assets/images/search.svg';
import ReactModal from 'react-modal';
import { TokenDetails } from '../TradeView/constants';

const modalStyle: ReactModal.Styles = {
  content: {
    borderRadius: '18px',
    border: '1px solid #3B79D4',
    background: '#181627',
    width: '410px',
    height: '461px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

type TokenProps = {
  icon: string;
  name: string;
  selected: boolean;
  ticker: string;
  onClick: (string) => void;
};

const Token = memo(
  ({ icon, name, selected = false, ticker, onClick }: TokenProps) => {
    const selectedStyle = selected ? 'selected' : '';
    return (
      <div
        className={`token ${selectedStyle} d-flex align-items-center cursor-pointer`}
        onClick={() => onClick(ticker)}
      >
        <img src={icon} alt="token" className="token-ico mx-3" />
        <p className="token-name m-0 ms-3">{name}</p>
      </div>
    );
  },
);

type TokenPickerModalProps = {
  requestClose: (selected: string) => void;
  defaultValue: string;
  isOpen: boolean;
  tokenList: TokenDetails[];
};

const TokenPickerModal = ({
  defaultValue = '',
  requestClose,
  isOpen,
  tokenList,
}: TokenPickerModalProps) => {
  const [selected, select] = useState(defaultValue);
  const [searchValue, setSearchValue] = useState('');

  const onTokenClick = useCallback((tokenTicker: string) => {
    select(tokenTicker);
  }, []);

  // Here use memo caches the calculated value and
  // saves recalculating the list data
  const filteredTokenList = useMemo(() => {
    return searchValue
      ? tokenList.filter(
          v =>
            v.name.match(new RegExp(searchValue, 'i')) ||
            v.symbol.match(new RegExp(searchValue, 'i')) ||
            v.ticker.match(new RegExp(searchValue, 'i')),
        )
      : tokenList;
  }, [tokenList, searchValue]);

  const onClose = useCallback(() => {
    setSearchValue('');
    requestClose(selected);
  }, [requestClose, selected]);

  return (
    <Modal
      isOpen={isOpen}
      style={modalStyle}
      ariaHideApp={false}
      onRequestClose={onClose}
    >
      <div className="token-picker">
        <div className="close-ico d-flex justify-content-end">
          <img
            src={closeIco}
            alt="Close modal"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="search d-flex justify-content-center align-items-center mt-3">
          <div className="search-container d-flex align-items-center">
            <img src={searchIco} alt="Search Token" className="p-3" />
            <input
              type="text"
              className="form-control token-search"
              placeholder="Search chains"
              onChange={e => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <div className="token-list mt-3 d-flex align-items-center flex-column">
          {filteredTokenList.map(token => (
            <Token
              key={token.ticker}
              icon={token.icon}
              selected={selected === token.ticker}
              ticker={token.ticker}
              name={token.name}
              onClick={onTokenClick}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default memo(TokenPickerModal);
