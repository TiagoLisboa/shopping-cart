import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addCoupon } from '../../store/modules/coupon/actions';

import { CouponForm } from './styles';

const coupons = {
  'A': '30%',
  'FOO': '$ 100',
  'C': 'Free Shipping'
}

export default function CouponInput() {
  const [ newCoupon, setNewCoupon ] = useState('');

  const dispatch = useDispatch();

  function handleNewCoupon(e) {
    e.preventDefault();
    if (coupons[newCoupon]) {
      dispatch(addCoupon({ name: newCoupon, value: coupons[newCoupon] }));
    }
    setNewCoupon('');
  }

  return (
    <CouponForm onSubmit={ handleNewCoupon }>
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
