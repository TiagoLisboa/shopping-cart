import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import { 
  FaPlusCircle,
  FaMinusCircle,
} from 'react-icons/fa';

export default function ProductTable() {
  const products = useSelector(state => state.cart);
  return (
    <Container>
      <table>
        {products.map(product => (
          <tr>
            <td>{ product.name }</td>
            <td>
              <div>
                <button type="button"><FaMinusCircle /></button> 
                <input type="text" value={ product.quantity } readOnly/> kg 
                <button type="button"><FaPlusCircle /></button>
              </div>
            </td>
            <td>$ { product.value }</td>
          </tr>
        ))}
        
      </table>
    </Container>
  );
}
