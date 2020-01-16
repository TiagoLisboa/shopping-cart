export function addCoupon(coupon) {
  return {
    type: 'coupon@ADD',
    coupon
  }
}

export function removeCoupon(coupon) {
  return {
    type: 'coupon@REMOVE',
    coupon
  }
}