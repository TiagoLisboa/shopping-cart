export function updateSubtotal ({subtotal, totalquantity}) {
  return {
    type: 'totals@UPDATE_SUBTOTAL',
    subtotal,
    totalquantity
  }
}

export function updateShipping () {
  return {
    type: 'totals@UPDATE_SHIPPING'
  }
}

export function updateTotal () {
  return {
    type: 'totals@UPDATE_TOTAL'
  }
}

export function updateSubtotalDiscount(discount) {
  return {
    type: 'totals@UDATE_SUBTOTAL_DISCOUNT',
    subtotalDiscount: discount
  }
}
export function updateShippingDiscount(discount) {
  return {
    type: 'totals@UDATE_SHIPPING_DISCOUNT',
    shippingDiscount: discount
  }
}
export function updateTotalDiscount(discount) {
  return {
    type: 'totals@UDATE_TOTAL_DISCOUNT',
    totalDiscount: discount
  }
}