import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addCoupon } from '../../store/modules/coupons/actions';
import { updateSubtotalDiscount, updateShippingDiscount, updateTotalDiscount } from '../../store/modules/totals/actions';

import { CouponForm } from './styles';

const coupons = {
  'A': ['30%', updateSubtotalDiscount, .3],
  'FOO': ['$ 100', updateTotalDiscount, 100],
  'C': ['Free Shipping', updateShippingDiscount, true]
}

export default function CouponInput() {
  const [ newCoupon, setNewCoupon ] = useState('');

  const dispatch = useDispatch();

  function handleNewCoupon(e) {
    e.preventDefault();
    if (coupons[newCoupon]) {
      dispatch(addCoupon({ name: newCoupon, value: coupons[newCoupon][0] }));
      dispatch(coupons[newCoupon][1](coupons[newCoupon][2]));
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
