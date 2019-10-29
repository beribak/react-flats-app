import React, { Component } from 'react';

class Flat extends Component {

  constructor(props){
    super(props);

    this.state = {

    };
  }

  handleClick = () => {
    this.props.selectFlat(this.props.lng, this.props.lat);
  }

  render() {

    return(
      <div className="card" onClick={this.handleClick} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${this.props.src}')`}}>

        <h4 className="name">{this.props.name}</h4>
        <p className="price">{this.props.price}{this.props.priceCurrency}</p>
      </div>
    );
  }
}

export default Flat;
