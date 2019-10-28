import React, { Component } from 'react';
import Flat from './flat';

class FlatsList extends Component {

  constructor(props){
    super(props);

    this.state = {

    };
  }

  render() {

    return(
      <div>
        {this.props.flats.map (gif => <h1>{gif.name}</h1>)}
      </div>
    );
  }
}

export default FlatsList;
