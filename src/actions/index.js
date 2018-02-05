export const FETCH_POST = 'fetch_post'
import axios from 'axios'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = "?key=igor123"

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  //console.log(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POST,
    payload: request
  }
}
