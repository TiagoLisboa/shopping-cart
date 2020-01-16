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