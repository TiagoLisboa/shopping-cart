import React from 'react';

import { CouponForm } from './styles';

export default function CouponInput() {
  return (
    <CouponForm>
      <input type="text" placeholder="Coupon code"/>
      <button>Apply</button>
    </CouponForm>
  );
}
