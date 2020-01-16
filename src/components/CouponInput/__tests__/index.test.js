import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import CouponInput from '..';
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
  
    expect(dispatch).toHaveBeenCalledWith(CouponActions.addCoupon(
      { name: 'A', value: '30%' }));

    expect(dispatch).toHaveBeenCalledWith(TotalsActions.updateSubtotalDiscount(.3));
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
  
    expect(dispatch).toHaveBeenCalledWith(CouponActions.addCoupon(
      { name: 'FOO', value: '$ 100' }));

    expect(dispatch).toHaveBeenCalledWith(TotalsActions.updateTotalDiscount(100));
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
  
    expect(dispatch).toHaveBeenCalledWith(CouponActions.addCoupon(
      { name: 'C', value: 'Free Shipping' }));

    expect(dispatch).toHaveBeenCalledWith(TotalsActions.updateShippingDiscount(true));
  });
})