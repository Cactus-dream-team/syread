import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchBooksData from '../actions/booksActions'
import fetchMarks from '../actions/marksActions'
import ChapterWrap from './ChapterWrap'

class BookPage extends React.Component{
    componentWillMount(){
      const { dispatch } = this.props;
      dispatch(fetchBooksData());
      dispatch(fetchMarks(this.props.id));
    }
    extractCurrent(list, id){
      return list.filter(item => item['id'] == id)[0];
    }
    render(){
        const {books, marks} = this.props;
        if( books.isFetching ||  books.items.length == 0 || marks.isFetching) {
            return (
                <div className="wait-handler centered container">
                    <h3>Fetching data...</h3>
                </div>
            );
        }
        return(
              <ChapterWrap item={this.extractCurrent(this.props.books.items,this.props.id)} mark={this.props.marks.mark}/>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return{
        id: +ownProps.params.id,
        books: state.app.books,
        marks: state.app.marks
    }
};

BookPage.propTypes = {
  id: PropTypes.number.isRequired,
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

export default connect(mapStateToProps)(BookPage);
