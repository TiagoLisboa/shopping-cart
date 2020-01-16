import React from 'react';

import GlobalStyle from './styles/global';

import ProductTable from './componentes/ProductTable';
import CouponTable from './componentes/CouponTable';

function App() {
  return (
    <div className="App">
      <ProductTable />
      <CouponTable />
      <GlobalStyle />
    </div>
  );
}

export default App;
