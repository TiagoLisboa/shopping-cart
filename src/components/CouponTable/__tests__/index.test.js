import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import CouponTable from '..';
import * as CouponActions from '../../../store/modules/coupons/actions';
import * as TotalsActions from '../../../store/modules/totals/actions';
import { initalState }  from '../../../store/modules/totals/reducer';

import { coupons } from '../../CouponInput';

jest.mock('react-redux');

describe("Coupon Table", () => {
  it('should be able to find a coupon and remove it', () => {
    useSelector.mockImplementation(cb =>
      cb({
        totals: {...initalState},
        coupons: [coupons['A']]
      })
    );

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    const { getByTestId, getByText } = render(<CouponTable />);

    fireEvent.click(getByText('REMOVE'))
    expect(dispatch.mock.calls[0][0])
			.toMatchObject(CouponActions.removeCoupon(coupons['A']));
  })
});
