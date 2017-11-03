import axios from 'axios'
/**
 * ACTION TYPES
 */
const ADD_TO_CART = 'ADD_TO_CART'
const GET_CART = 'GET_CART'

/**
 * INITIAL STATE
 */

const initialState = {}

/**
 * ACTION CREATORS
 */

export const addToCart = (product, quantity) => ({ type: ADD_TO_CART, product, quantity })
export const getCart = cart => ({ type: GET_CART, cart })

/**
 * THUNK CREATORS
 */

const fetchCart = () => {
  return function(dispatch) {
    axios.get('/api/cart')
      .then( res => {
        dispatch(getCart(res.data))
      })
      .catch(err => console.log(err));
  }
}


/**
 * REDUCER
 */


export default function (state = initialState, action) {
  let newState = {...state}
  switch (action.type) {

    case ADD_TO_CART:
      const cart = {
          name: action.product.name,
          quantity: action.quantity,
          price: action.product.price,
          image: action.product.photos[0],
        }
      newState[action.product.id] = cart
      return newState

    case GET_CART:
      return action.cart

    default:
      return state
  }
}