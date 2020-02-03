import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import Totals from '..';

jest.mock('react-redux');

describe("Totals Table", () => {
  it('should be able to see subtotal, shipping and total values', () => {
    useSelector.mockImplementation(cb => cb({
      cart: [{
        name: 'Apple',
        quantity: 1,
        value: 60
      }],
			totals: {
				subtotal: 60,
				shipping: 30,
				total: 90
			},
			coupons: []
    }))

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    const { getByTestId, getByText } = render(<Totals />);

    expect(getByTestId('subtotal')).toContainElement(getByText('$ 60'));
    expect(getByTestId('shipping')).toContainElement(getByText('$ 30'));
    expect(getByTestId('total')).toContainElement(getByText('$ 90'));

  })
})
