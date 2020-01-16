import React from 'react';

import { Container, ProductTable } from './styles';
import { 
  FaPlusCircle,
  FaMinusCircle,
} from 'react-icons/fa';

export default function ProductList() {
  return (
    <Container>
      <ProductTable>
        <tr>
          <td>Apple</td>
          <td>
            <div>
              <button type="button"><FaMinusCircle /></button> 
              <input type="text" value={500} readOnly/> kg 
              <button type="button"><FaPlusCircle /></button>
            </div>
          </td>
          <td>$ 60</td>
        </tr>
      </ProductTable>
    </Container>
  );
}
