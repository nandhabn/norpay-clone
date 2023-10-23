import { memo } from 'react';
import { Link } from 'react-router-dom';

import norpayLogo from 'app/assets/images/norpay.svg';

function HeaderLink({ to, active = false, children }) {
  return (
    <div className="link">
      <Link to={to} className={active ? 'active' : ''}>
        {children}
      </Link>
    </div>
  );
}

function Header() {
  return (
    <div className="container-fluid d-flex app-header justify-content-between align-item-center">
      <div className="d-flex">
        <Link className="d-flex align-item-center" to="/">
          <img src={norpayLogo} alt="norpay-logo" />
        </Link>
      </div>
      <div className="routes align-items-center d-none d-sm-none d-md-flex">
        <HeaderLink to="/" active={true}>
          Trade
        </HeaderLink>
        <HeaderLink to="/">Earn</HeaderLink>
        <HeaderLink to="/">Support</HeaderLink>
        <HeaderLink to="/">About</HeaderLink>
      </div>
      <div className="connect d-flex align-items-center d-none d-sm-none d-md-flex">
        <button className="mb-0 px-4 py-1">Connect Wallet</button>
      </div>
    </div>
  );
}

export default memo(Header);
