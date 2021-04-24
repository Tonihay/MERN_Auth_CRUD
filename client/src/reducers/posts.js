
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post)); // if the post id = action.payload id then we want to return the action.payload 
    case DELETE:
      return posts.filter((post) => post._id !== action.payload); // we filter to keep all the posts except the one with the matching id with action.payload
    default:
      return posts;
  }
};