const defaultState = [{
  name: 'Apple',
  quantity: 0,
  value: 60
},{
  name: 'Bannana',
  quantity: 0,
  value: 10
}, {
  name: 'Orange',
  quantity: 0,
  value: 120
}];

export default function cart(state = defaultState, action) {
  switch (action.type) {
    case 'cart@UPDATE_QUANTITY':
      if (action.product.quantity < 0) return state;
      return state.map(product => {
        if (product.name == action.product.name) {
          product = action.product;
        }
        return product;
      });
    default:
      return state;
  }
}