import React, {PropTypes} from 'react'
import Header from './Header'

class Base extends React.Component{
  render(){
    return(
      <div className="app">
        <Header />

          { this.props.children }

      </div>
    )
  }
}
Base.propTypes = {
  children: PropTypes.element
};

export default Base;
