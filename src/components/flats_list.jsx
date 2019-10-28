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
      <div className="flats-list">
        {this.props.flats.map (gif => <Flat name={gif.name} key={gif.name} src={gif.imageUrl} />)}
      </div>
    );
  }
}

export default FlatsList;
