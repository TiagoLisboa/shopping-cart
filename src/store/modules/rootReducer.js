import { combineReducers } from 'redux';

import cart from './cart/reducer';
import coupon from './coupon/reducer';

export default combineReducers({
  cart,
  coupon
})