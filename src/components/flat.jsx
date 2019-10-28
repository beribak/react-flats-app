import React, { Component } from 'react';

class Flat extends Component {

  constructor(props){
    super(props);

    this.state = {

    };
  }

  render() {

    return(
      <div className="card" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.src}')`}}>

        <h4 className="name">{this.props.name}</h4>
        <p className="price">{this.props.price}{this.props.priceCurrency}</p>
      </div>
    );
  }
}

export default Flat;
