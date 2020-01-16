export function addCoupon(coupon) {
  return {
    type: 'coupon@ADD',
    coupon
  }
}