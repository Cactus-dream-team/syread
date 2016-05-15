import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchBooksData from '../actions/booksActions'
import BookList from '../components/BooksList'

class BooksListPage extends React.Component{
  constructor(props){
    super(props);
    const { dispatch } = this.props;
    dispatch(fetchBooksData());
  }
  render(){
    const {books} = this.props;
    if( books.isFetching || books.items.length == 0) {
      return (
        <div className="wait-handler">
          <h3>Fetching data...</h3>
        </div>
      );
    }
    return(
      <div className="content-wrap">
        <BookList items={books.items} />
      </div>
    );
  }
}
export const mapStateToProps = (state) => {
  return{
    books: state.app.books
  }
};
BooksListPage.propTypes = {
  books:PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      metaData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        creator: PropTypes.string.isRequired,
        description: PropTypes.string
      }).isRequired,
      cover: PropTypes.string
    })).isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(BooksListPage);
