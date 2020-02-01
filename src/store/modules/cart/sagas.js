import { all, put, select, takeLatest } from 'redux-saga/effects';

import { updateTotals } from '../totals/actions'

function* updateQuantity({ product }) {
	const cart = yield select((state) => state.cart);
	const subtotal = cart.reduce(
		(subtotal, item) => (subtotal + item.quantity * item.value),
		0
	);
	const quantity = cart.reduce((quantity, item) => quantity + item.quantity, 0);
	let shipping = subtotal > 400 || subtotal === 0 ? 0 : 30;
	shipping += quantity <= 10 ? 0 : 7 * Math.floor((quantity - 10) / 5);
	const total = subtotal + shipping;
	yield put(updateTotals({subtotal, shipping, total}));
}

export default all([
	takeLatest('cart@UPDATE_QUANTITY', updateQuantity)
]);
