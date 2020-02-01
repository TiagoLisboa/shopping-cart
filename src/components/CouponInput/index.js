import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addCoupon } from '../../store/modules/coupons/actions';

import { CouponForm } from './styles';

const coupons = {
	'A': {
		text: ({ subtotal }) => (`30% (${subtotal * .3})`),
		discount: (initial, totals) => ({
			...initial,
			subtotal: totals.subtotal * 0.3
		})
	},
	'FOO': {
		text: ({ total }) => (`$ 100 (${100 + Math.min(0, total - 100)})`),
		discount: (initial, totals) => ({
			...initial,
			total: 100 + Math.min(0, totals.total - 100)
		})
	},
	'C': {
		text: ({ subtotal, shipping }) => (`Free Shipping (${
			subtotal < 300.5 ? 0 : shipping
		})`),
		discount: (initial, totals) => ({
			...initial,
			shipping: totals.subtotal < 300.5 ? 0 : totals.shipping
		})	
	}
}

export default function CouponInput() {
  const [ newCoupon, setNewCoupon ] = useState('');

  const dispatch = useDispatch();

  function handleNewCoupon(e) {
    e.preventDefault();
    if (coupons[newCoupon]) {
      dispatch(addCoupon({ name: newCoupon, ...coupons[newCoupon] }));
    }
    setNewCoupon('');
  }

  return (
    <CouponForm onSubmit={ handleNewCoupon } data-testid='coupon-form'>
      <input
        type="text"
        placeholder="Coupon code"
        value={ newCoupon }
        onChange={ e => setNewCoupon(e.target.value) }
      />
      <button type="submit">Apply</button>
    </CouponForm>
  );
}
