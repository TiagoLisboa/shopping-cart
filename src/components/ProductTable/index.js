import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import { 
  FaPlusCircle,
  FaMinusCircle,
} from 'react-icons/fa';

import { updateProductQuantity } from '../../store/modules/cart/actions';

export default function ProductTable() {
  const products = useSelector(state => state.cart);

  const dispatch = useDispatch();

  function handleProductUpdate (product) {
    dispatch(updateProductQuantity(product));
  }

  return (
    <Container>
      <table>
        <tbody>
          {products.map(product => (
            <tr key={product.name}>
              <td>{ product.name }</td>
              <td>
                <div>
                  <button 
                    type="button"
                    onClick={ () => handleProductUpdate({
                      ...product,
                      quantity: product.quantity - 1
                    })}>
                    <FaMinusCircle />
                  </button> 
                  <input type="text" value={ product.quantity } readOnly/> kg 
                  <button
                    type="button"
                    onClick={ () => handleProductUpdate({
                      ...product,
                      quantity: product.quantity + 1
                    }) }>
                    <FaPlusCircle />
                  </button>
                </div>
              </td>
              <td>$ { product.value }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
