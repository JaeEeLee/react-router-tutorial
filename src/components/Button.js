import React, { Component } from 'react';

class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeStyle: {
                color: 'green',
                fontSize: '2rem'
            },
        }
    }

    handleClick = () => {
        console.log(this.props)
        
        /*
        this.setState({
            visible : true
        });*/
    }

    render () {
        return (
            <button onClick={this.handleClick}>Click Me</button>
        )
    }
}

export default Button;