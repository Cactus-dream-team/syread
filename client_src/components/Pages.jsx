import React, {PropTypes} from 'react'
import '../lib'
class Reader extends React.Component{
  componentDidMount(){
    window.setGap();
    window.pagination.findMark(this.props.lastMark);
  }

  render(){
    function createMarkup(text) { return {__html: text}; };
    window.pagination.reset();
    return(
      <div>
        <div className="content-wrap">
          <div className="columned-text content" key={this.props.chId} dangerouslySetInnerHTML={createMarkup(this.props.chapter)} />
        </div>

        <div className="prevPage" onClick={()=>{
                                                  window.pagination.prevPage(this.props.prev);
                                                  $.ajax({
                                                    method: "POST",
                                                    url: "http://46.105.85.199:3000/api/marks/",
                                                    data: {
                                                          "position": this.props.chId+":"+window.pagination.getOffset(),
                                                          "text": "docitali",
                                                          "priority": true,
                                                          "bookId": this.props.bid
                                                        }
                                                  })
                                                }}></div>
        <div className="nextPage" onClick={()=>{
                                                window.pagination.nextPage(this.props.next)

                                                }}></div>
      </div>

    )
  }
}

export default Reader;


