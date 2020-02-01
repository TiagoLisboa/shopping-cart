export const initialState = {
  subtotal: 0,
  shipping: 0,
  total: 0
}


export default function totals(state = initialState, action) {
  
  switch (action.type) {
    case 'totals@UPDATE_TOTALS':
      return {
        ...state,
				...action.totals,
      }
    default:
      return state;
  }
}
