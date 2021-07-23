import React, { Component } from 'react';

class Welcomecomponent extends Component {
    constructor(props){
      super(props)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>"{this.props.name} is awesome, React works!!!!"</h1>
            </div>
        );
    }
}

export default Welcomecomponent;
