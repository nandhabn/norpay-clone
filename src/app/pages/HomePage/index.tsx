import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import TradeView from './components/TradeView/TradeView';
import Header from './components/Header/Header';

import './index.scss';

export const HomePage = memo(() => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Norpay" />
      </Helmet>
      <Header />
      <TradeView />
    </>
  );
});
