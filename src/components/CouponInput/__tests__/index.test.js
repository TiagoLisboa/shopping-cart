import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import CouponInput, { coupons } from '..';
import * as CouponActions from '../../../store/modules/coupons/actions';
import * as TotalsActions from '../../../store/modules/totals/actions';

jest.mock('react-redux');

describe("Coupon Input", () => {
  it('should be able to input a coupon A', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <CouponInput />
    );
  
    const dispatch = jest.fn();
  
    useDispatch.mockReturnValue(dispatch);
  
    fireEvent.change(getByPlaceholderText('Coupon code'), {
      target: { value: 'A' }
    });
    fireEvent.submit(getByTestId('coupon-form'));
  
    expect(dispatch).toHaveBeenCalledWith(CouponActions.addCoupon(coupons['A']));

  });

  it('should be able to input a coupon FOO', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <CouponInput />
    );
  
    const dispatch = jest.fn();
  
    useDispatch.mockReturnValue(dispatch);
  
    fireEvent.change(getByPlaceholderText('Coupon code'), {
      target: { value: 'FOO' }
    });
    fireEvent.submit(getByTestId('coupon-form'));
  
    expect(dispatch).toHaveBeenCalledWith(CouponActions.addCoupon(coupons['FOO']));

  });

  it('should be able to input a coupon C', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <CouponInput />
    );
  
    const dispatch = jest.fn();
  
    useDispatch.mockReturnValue(dispatch);
  
    fireEvent.change(getByPlaceholderText('Coupon code'), {
      target: { value: 'C' }
    });
    fireEvent.submit(getByTestId('coupon-form'));
  
    expect(dispatch).toHaveBeenCalledWith(CouponActions.addCoupon(coupons['C']));

  });
})
