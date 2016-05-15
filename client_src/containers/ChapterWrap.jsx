import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchChapter from '../actions/pagesActions'
import Pages from '../components/Pages'

class ChapterWrap extends React.Component{
    componentWillMount(){
        const { dispatch } = this.props;
        console.log(this.props);
        dispatch(fetchChapter(this.props.item.id, this.props.item.chapters[5].id));
    }
    render(){
        const {pages} = this.props;
        if( pages.isFetching) {
            return (
            <h3>Fetching data...</h3>
            );
        }
        return(
          <Pages chapter={pages.chapter}/>
        );
    }
}


const mapStateToProps = (state) => {
    return{
      pages: state.app.pages
    }
};

ChapterWrap.propTypes = {
  item:PropTypes.shape({
    id: PropTypes.number.isRequired,
    metaData: PropTypes.shape({
      title: PropTypes.string.isRequired,
      creator: PropTypes.string.isRequired,
      description: PropTypes.string
    }).isRequired,
    cover: PropTypes.string
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(ChapterWrap);
