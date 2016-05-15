import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Base from './components/Basement'
import BooksListPage from './containers/BooksListPage'
import BookPage from './containers/BookPage'
/*
 <Route path="/books/"
 component={BooksListPage} />
 <Route path="/books/:id"
 component={BookPage} />
 */
export default (
  <Route path="/" component={Base}>
    <IndexRoute component={BooksListPage} />
    <Route path="/books/"
           component={BooksListPage} />
    <Route path="/books/:id"
           component={BookPage} />
  </Route>
)
