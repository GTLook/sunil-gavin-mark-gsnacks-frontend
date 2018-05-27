import axios from 'axios'

export const GET_ALL_SNACKS = 'GET_ALL_SNACKS'
export const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS'
export const GET_USER = 'GET_USER'
export const GET_AUTH = 'GET_AUTH'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const LOGIN_MODAL = 'LOGIN_MODAL'
export const SIGNUP_MODAL = 'SIGNUP_MODAL'

const API = 'http://localhost:5000'


export const getAllSnacks = () => (
  dispatch => {
    axios.get(`${API}/api/snacks`)
    .then((response) => {
      dispatch({
        type: GET_ALL_SNACKS,
        payload: response.data.data
      })
    })
  }
)

export const getAllReviews = () => (
  dispatch => {
    axios.get(`${API}/api/reviews`)
    .then((response) => {
      dispatch({
        type: GET_ALL_REVIEWS,
        payload: response.data.data
      })
    })
  }
)

export const createReview = (snackId, body) => (
  dispatch => {
    axios.post(`${API}/api/snacks/${snackId}/reviews`, body)
    .then(response => {
      dispatch(getAllReviews())
    })
  }
)

export const getUser = () => (
  dispatch => {
    axios.get(`${API}/users/`)
    .then((response) => {
      dispatch({
        type: GET_USER,
        payload: response.data.data
      })
    })
  }
)


export const getAllUsers = () => (
  dispatch => {
    axios.get(`${API}/users/`)
    .then((response) => {
      dispatch({
        type: GET_ALL_USERS,
        payload: response.data.data
      })
    })
  }
)

export const getAuth = () => (
  dispatch => {
    axios.get(`${API}/auth/`)
    .then((response) => {
      dispatch({
        type: GET_AUTH,
        payload: response.data.data
      })
    })
  }
)

export const loginModal = () => {
  console.log('hi');
  return (
  dispatch => {
    dispatch({
      type: LOGIN_MODAL
    })
  }
)}


export const signupModal = () => (
  dispatch => {
    dispatch({
      type: SIGNUP_MODAL
    })
  }
)


export const signup = (body) => (
  dispatch => {
    axios.post(`${API}/users`,body)
    .then((response) => {
      dispatch({
        type: LOGIN_MODAL,
      })
    })
    .catch(err => console.log(err))
  }
)
