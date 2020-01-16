import { combineReducers } from 'redux';

import cart from './cart/reducer';
import coupons from './coupons/reducer';
import totals from './totals/reducer';

export default combineReducers({
  cart,
  coupons,
  totals
})