import React from 'react';

import GlobalStyle from './styles/global';

import ProductTable from './components/ProductTable';
import CouponTable from './components/CouponTable';
import Totals from './components/Totals';
import CouponInput from './components/CouponInput';

function App() {
  return (
    <div className="App">
      <ProductTable />
      <CouponTable />
      <Totals />
      <CouponInput />
      <GlobalStyle />
    </div>
  );
}

export default App;
