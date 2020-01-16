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

export function updateSubtotalDiscount() {
  return {
    type: 'totals@UDATE_SUBTOTAL_DISCOUNT',
    subtotalDiscount: .3
  }
}
export function updateShippingDiscount() {
  return {
    type: 'totals@UDATE_SHIPPING_DISCOUNT',
    shippingDiscount: true
  }
}
export function updateTotalDiscount() {
  return {
    type: 'totals@UDATE_TOTAL_DISCOUNT',
    totalDiscount: 100
  }
}