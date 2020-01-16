import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { updateShipping, updateTotal } from '../../store/modules/totals/actions'

import { Container } from './styles';

export default function Totals() {
  const subtotal = useSelector(state => state.totals.subtotal);
  const shipping = useSelector(state => state.totals.shipping);
  const subtotalDiscounted = useSelector(state => state.totals.subtotalDiscounted);
  const totalDiscount = useSelector(state => state.totals.totalDiscount)
  let total = subtotalDiscounted + shipping
  total = total - totalDiscount > 0 ? total - totalDiscount : 0;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateShipping())
    dispatch(updateTotal())
  }, [subtotal, dispatch])

  useEffect(() => {
    dispatch(updateTotal())
  }, [shipping, dispatch])

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