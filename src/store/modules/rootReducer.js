import { combineReducers } from 'redux';

import cart from './cart/reducer';
import coupons from './coupons/reducer';

export default combineReducers({
  cart,
  coupons
})