import React from 'react';

import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function CouponTable() {
  let coupons = useSelector(state => state.coupons);
  const totals = useSelector(state => state.totals);

  coupons.map(coupon => {
    if (coupon.name === "A") coupon.discounted = totals.subtotal * totals.subtotalDiscount;
    if (coupon.name === "FOO") coupon.discounted = totals.totalDiscounted;
    if (coupon.name === "C") coupon.discounted = !totals.shippingDiscounted ? 'Applied' : 'Not Applied';

    return coupon;
  });
  return (
    <Container>
      <table>
        <tbody>
          {coupons.map(coupon => (
            <tr key={coupon.name}>
              <td>Coupon { coupon.name }</td>
              <td>
                <div>
                  <button type="button">REMOVE</button>
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
