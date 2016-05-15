import React, { PropTypes } from 'react'
import BookItem from './BookItem'

export default class BookList extends React.Component{
    render(){
        return(
            <div className="book-list">
                {this.props.items.map(book =>
                    <BookItem key={book.id}  item={book} />)
                }
            </div>
        )
    }
}
