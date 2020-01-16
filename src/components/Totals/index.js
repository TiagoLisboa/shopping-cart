import React from 'react';

import { Container } from './styles';

export default function Totals() {
  return (
    <Container>
      <table>
        <tr>
          <td>Subtotal</td>
          <td>
          </td>
          <td>$ 60</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td>
          </td>
          <td>$ 60</td>
        </tr>
        <tr className="total">
          <td>Total</td>
          <td>
          </td>
          <td>$ 60</td>
        </tr>
      </table>
    </Container>
  );
}