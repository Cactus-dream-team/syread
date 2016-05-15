import React, { PropTypes } from 'react'


export default class DumbLink extends React.Component{
    render(){
        const {children,active,onClick} = this.props;

        if (active) {
            return <span className="inactive">{ children }</span>
        }
        return(
            <a href="#" onClick={e => {e.preventDefault(); onClick();}}>
                { children }
            </a>
        )
    };
}
