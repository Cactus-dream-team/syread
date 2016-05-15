import { combineReducers } from 'redux'
import books from './books'
import pages from './pages'

const rootReducer = combineReducers({
  books,
  pages
});

export default rootReducer;
