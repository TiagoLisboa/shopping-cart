import React from 'react';
import { Provider } from 'react-redux'

import GlobalStyle from './styles/global';
import ProductTable from './components/ProductTable';
import CouponTable from './components/CouponTable';
import Totals from './components/Totals';
import CouponInput from './components/CouponInput';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductTable />
        <CouponTable />
        <Totals />
        <CouponInput />
        <GlobalStyle />
      </div>
    </Provider>
  );
}

export default App;
