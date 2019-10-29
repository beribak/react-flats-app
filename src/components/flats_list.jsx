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
        {this.props.flats.map (gif => <Flat selectFlat={this.props.selectFlat} lng={gif.lng} lat={gif.lat} name={gif.name} key={gif.name} src={gif.imageUrl} price={gif.price} />)}
      </div>
    );
  }
}

export default FlatsList;
