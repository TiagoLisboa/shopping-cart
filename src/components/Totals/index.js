import React from 'react';

import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Totals() {
  const subtotal = useSelector(state => state.totals.subtotal);
  const shipping = useSelector(state => state.totals.shipping);
  const total = useSelector(state => state.totals.total);
  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>
            </td>
            <td>$ { subtotal }</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>
            </td>
            <td>$ { shipping }</td>
          </tr>
          <tr className="total">
            <td>Total</td>
            <td>
            </td>
            <td>$ { total }</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}