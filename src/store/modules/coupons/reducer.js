export default function coupons(state = [], action) {
  switch (action.type) {
    case 'coupon@ADD':
      return [...state, action.coupon];
    default:
      return state;
  }
}