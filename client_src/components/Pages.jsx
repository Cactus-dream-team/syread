import React, {PropTypes} from 'react'
import '../lib'
class Reader extends React.Component{
  componentDidMount(){
    window.setGap();
  }

  render(){
    function createMarkup(text) { return {__html: text}; };
    window.pagination.reset();
    return(
      <div>
        <div className="content-wrap">
          <div className="columned-text content" dangerouslySetInnerHTML={createMarkup(this.props.chapter)} />
        </div>

        <div className="prevPage" onClick={()=>{window.pagination.prevPage(this.props.prev)}}></div>
        <div className="nextPage" onClick={()=>{window.pagination.nextPage(this.props.next)}}></div>
      </div>

    )
  }
}

export default Reader;


