import React from 'react';

import GlobalStyle from './styles/global';

import ProductList from './componentes/ProductList';

function App() {
  return (
    <div className="App">
      <ProductList />
      <GlobalStyle />
    </div>
  );
}

export default App;
