import React from 'react';

import GlobalStyle from './styles/global';

import ProductTable from './components/ProductTable';
import CouponTable from './components/CouponTable';
import Totals from './components/Totals';

function App() {
  return (
    <div className="App">
      <ProductTable />
      <CouponTable />
      <Totals />
      <GlobalStyle />
    </div>
  );
}

export default App;
