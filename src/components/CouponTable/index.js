import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { removeCoupon } from '../../store/modules/coupons/actions'

import { Container } from './styles';

export default function CouponTable() {
  let coupons = useSelector(state => state.coupons);
  const totals = useSelector(state => state.totals);

  const dispatch = useDispatch();

  function handleRemoveCoupon (coupon) {
    dispatch(removeCoupon(coupon));
  }

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
              <td>{ coupon.text(totals) }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
