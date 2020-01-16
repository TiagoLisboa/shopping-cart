import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { removeCoupon } from '../../store/modules/coupons/actions'
import { updateSubtotalDiscount, updateShippingDiscount, updateTotalDiscount } from '../../store/modules/totals/actions'

import { Container } from './styles';

export default function CouponTable() {
  let coupons = useSelector(state => state.coupons);
  const totals = useSelector(state => state.totals);

  const dispatch = useDispatch();

  function handleRemoveCoupon (coupon) {
    dispatch(removeCoupon(coupon));
    if (coupon.name === "A") {
      dispatch(updateSubtotalDiscount(0));
    }
    if (coupon.name === "FOO") {
      dispatch(updateTotalDiscount(0));
    }
    if (coupon.name === "C") {
      dispatch(updateShippingDiscount(false));
    }
  }

  coupons.map(coupon => {
    if (coupon.name === "A") coupon.discounted = totals.subtotal * totals.subtotalDiscount;
    if (coupon.name === "FOO") { 
      coupon.discounted = totals.total - totals.totalDiscount > 0
        ? totals.totalDiscount
        : totals.totalDiscount - (totals.totalDiscount - totals.total);
    }
    if (coupon.name === "C") { 
      coupon.discounted = totals.shipping > 0 && !totals.shippingDiscounted ? 'Applied' : 'Not Applied';
    }

    return coupon;
  });
  return (
    <Container>
      <h2>Coupons</h2>
      <table>
        <tbody>
          {coupons.map(coupon => (
            <tr key={coupon.name}>
              <td>Coupon { coupon.name }</td>
              <td>
                <div>
                  <button type="button" onClick={() => handleRemoveCoupon(coupon)}>REMOVE</button>
                </div>
              </td>
              <td>{ coupon.discounted } ({ coupon.value })</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
