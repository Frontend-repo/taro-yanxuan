/* XXX HOST、HOST_M 是在 config 中配置的 */
/* eslint-disable */
export const host = HOST
export const hostM = HOST_M
/* eslint-enable */

export const CDN = 'https://yanxuan.nosdn.127.net'

// home
export const API_HOME = `${host}/xhr/index/index.json`
export const API_HOME_SEARCH_COUNT = `${host}/xhr/search/displayBar.json`
export const API_HOME_PIN = `${hostM}/pin/min/item/recommend.json`
export const API_HOME_RECOMMEND = `${host}/xhr/rcmd/index.json`

// cate
export const API_CATE = `${host}/xhr/list/category.json`
export const API_CATE_SUB = `${host}/xhr/list/subCate.json`
export const API_CATE_SUB_LIST = `${host}/xhr/list/l2Items2.json`

// cart
export const API_CART = `${host}/xhr/promotionCart/getCarts.json`
export const API_CART_NUM = `${host}/xhr/promotionCart/getMiniCartNum.json`
export const API_CART_RECOMMEND = `${host}/xhr/rcmd/cart.json`

// user
export const API_USER = `${host}/xhr/user/getDetail.json`
export const API_USER_LOGIN = `${host}/xhr/u/mailLogin.json`
export const API_CHECK_LOGIN = `${host}/xhr/u/checkLogin.json`