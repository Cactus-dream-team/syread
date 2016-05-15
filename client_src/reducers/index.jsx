import { combineReducers } from 'redux'
import books from './books'
import pages from './pages'
import marks from './marks'

const rootReducer = combineReducers({
  books,
  pages,
  marks
});

export default rootReducer;
