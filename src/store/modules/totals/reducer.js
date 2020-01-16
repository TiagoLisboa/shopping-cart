const initialState = {
  subtotal: 0,
  shipping: 0,
  total: 0,
  subtotalDiscount: 0,
  shippingDiscount: 0, 
  totalDiscount: 0,
  subtotalDiscounted: 0,
  shippingDiscounted: 0, 
  totalDiscounted: 0,
  totalquantity: 0
}


export default function totals(state = initialState, action) {
  
  switch (action.type) {
    case 'totals@UPDATE_SUBTOTAL':
      return {
        ...state,
        subtotal: action.subtotal,
        totalquantity: action.totalquantity,
        subtotalDiscounted: action.subtotal - state.subtotalDiscount > 0
          ? action.subtotal - state.subtotalDiscount
          : 0
      }
    case 'totals@UPDATE_SHIPPING':
      let s = (state.subtotal > 400 || state.subtotal == 0) ? 0 : 30;
      s = (s != 0 && state.totalquantity > 10)
        ? s + Math.ceil((state.totalquantity - 10) / 5) * 7
        : s;
      return {
        ...state,
        shipping: s,
        shippingDiscounted: s - state.shippingDiscount > 0
          ? s - state.shippingDiscount
          : 0
      }
    case 'totals@UPDATE_TOTAL':
      const t = state.subtotalDiscounted + state.shippingDiscounted;
      return {
        ...state,
        total: t,
        totalDiscounted: t - state.totalDiscount > 0 
          ? t - state.totalDiscount
          : 0
      }
    default:
      return state;
  }
}