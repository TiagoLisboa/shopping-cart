import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';

const values = {subtotal: 0, shipping: 0, total: 0};

export default function Totals() {
  const cart = useSelector(state => state.cart);
	const coupons = useSelector(state => state.coupons);
	const totals = useSelector(state => state.totals);
	const [discounted, setDiscounted] = useState(values);

	const dispatch = useDispatch();

	function calcTotal (totals, discounts) {
		return totals.subtotal - discounts.subtotal + totals.shipping - discounts.shipping - discounts.total;
	}

	useEffect(() => {
		let initial = values;
		coupons.forEach(coupon => {
			initial = coupon.discount(initial, totals);
		})
		setDiscounted(initial);
	}, [coupons, totals])

  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>
            </td>
            <td data-testid="subtotal">$ { totals.subtotal - discounted.subtotal }</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>
            </td>
            <td data-testid="shipping">$ { totals.shipping - discounted.shipping }</td>
          </tr>
          <tr className="total">
            <td>Total</td>
            <td>
            </td>
            <td data-testid="total">$ { calcTotal(totals, discounted) }</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
