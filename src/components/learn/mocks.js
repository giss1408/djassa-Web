/**
 * Screen-id → mock-component registry.
 *
 * Kept out of the two screen files so each of those exports components only,
 * which is what Fast Refresh needs to hot-reload them. The ids here must match
 * the `id` of each screen in content/learn.*.js — that string is the join
 * between the copy and the picture, and a typo shows up as a blank device.
 */
import {
  RetailerDeals,
  RetailerHome,
  RetailerNewDeal,
  RetailerRecord,
  RetailerSignIn,
} from './RetailerScreens.jsx'
import {
  UserHome,
  UserLoyalty,
  UserPay,
  UserReceipt,
  UserScan,
} from './UserScreens.jsx'

export const MOCKS = {
  retailer: {
    signin: RetailerSignIn,
    home: RetailerHome,
    record: RetailerRecord,
    deals: RetailerDeals,
    newdeal: RetailerNewDeal,
  },
  user: {
    home: UserHome,
    scan: UserScan,
    pay: UserPay,
    receipt: UserReceipt,
    loyalty: UserLoyalty,
  },
}
