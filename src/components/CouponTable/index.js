import React from 'react';

import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function CouponTable() {
  const coupons = useSelector(state => state.coupons);

  return (
    <Container>
      <table>
        <tbody>
          {coupons.map(coupon => (
            <tr>
              <td>Coupon { coupon.name }</td>
              <td>
                <div>
                  <button type="button">REMOVE</button>
                </div>
              </td>
              <td>$ 57 ({ coupon.value })</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
