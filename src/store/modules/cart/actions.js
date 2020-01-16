export function updateProductQuantity(product) {
  return {
    type: 'cart@UPDATE_QUANTITY',
    product
  }
}