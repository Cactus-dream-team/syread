import React, {PropTypes} from 'react'
import { Link } from 'react-router'


export default class BookItem extends React.Component{
  render(){
    const {id,metaData,cover} = this.props.item;
    const {title, creator} = metaData;

    return(
      <div className="book-item">
        <Link to={`/books/${id}`}><img src={`http://46.105.85.199:3000/${cover.replace(/\.\/client\//g,'')}`} /></Link>
        <div>
          <h3><Link to={`/books/${id}`}>{ title }</Link></h3>
          <p>Author: { creator }</p>
        </div>
      </div>
    )
  }
}


