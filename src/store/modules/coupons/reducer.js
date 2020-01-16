export default function coupons(state = [], action) {
  switch (action.type) {
    case 'coupon@ADD':
      if (state.some(coupon => coupon.name === action.coupon.name)) return state;
      return [...state, action.coupon];
    default:
      return state;
  }
}