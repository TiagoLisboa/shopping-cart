import React from 'react';

import { Container } from './styles';

export default function CouponTable() {
  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <td>Coupon A</td>
            <td>
              <div>
                <button type="button">REMOVE</button>
              </div>
            </td>
            <td>$ 57 (30 %)</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
