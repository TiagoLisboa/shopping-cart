import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import ProductTable from '..';

import * as CartActions from '../../../store/modules/cart/actions';

jest.mock('react-redux');

describe ("Product Table", () => {
  it('should be able to increase product quantity', () => {
    useSelector.mockImplementation(cb => cb({
      cart: [{
        name: 'Apple',
        quantity: 0,
        value: 60
      }]
    }));

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    const { getByTestId } = render(<ProductTable />);

    fireEvent.click(getByTestId('increase'));

    expect(dispatch).toHaveBeenCalledWith(CartActions.updateProductQuantity({
      name: 'Apple',
      quantity: 1,
      value: 60
    }))
  });

  it('should be able to decrease product quantity', () => {
    useSelector.mockImplementation(cb => cb({
      cart: [{
        name: 'Apple',
        quantity: 1,
        value: 60
      }]
    }));

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    const { getByTestId } = render(<ProductTable />);

    fireEvent.click(getByTestId('decrease'));

    expect(dispatch).toHaveBeenCalledWith(CartActions.updateProductQuantity({
      name: 'Apple',
      quantity: 0,
      value: 60
    }))
  });
});