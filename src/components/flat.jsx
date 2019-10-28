import React, { Component } from 'react';

class Flat extends Component {

  constructor(props){
    super(props);

    this.state = {

    };
  }

  render() {

    return(
      <div className="card">
        <div><img src={this.props.src} className="image" /></div>
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}

export default Flat;
