import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchChapter from '../actions/pagesActions'
import Pages from '../components/Pages'

class ChapterWrap extends React.Component{
    constructor(props){
        super(props);
        this.nextChapter = this.nextChapter.bind(this);
        this.prevChapter = this.prevChapter.bind(this);
        this.i = 1;
    }
    componentWillMount(){
        const { dispatch } = this.props;
        dispatch(fetchChapter(this.props.item.id, this.props.item.chapters[this.i].id));
    }

    nextChapter(){
        const { dispatch } = this.props;
        dispatch(fetchChapter(this.props.item.id, this.props.item.chapters[++this.i].id));
    }
    prevChapter(){
      const { dispatch } = this.props;
      if(this.i>1)
        dispatch(fetchChapter(this.props.item.id, this.props.item.chapters[--this.i].id));
    }

    render(){
        const {pages} = this.props;
        if( pages.isFetching) {
            return (
            <h3>Fetching data...</h3>
            );
        }
        return(
          <Pages chapter={pages.chapter} next={this.nextChapter} prev={this.prevChapter}/>
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
