import React, { Component } from 'react';
import FlatsList from './flats_list';
import flats from '../../data/flats';
import Marker from './marker';
import GoogleMapReact from 'google-map-react';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      selectedFlat: {
        lng: 43,
        lat: 43
      }
    };
  }

  render() {

    return(
      <div>
        <div className="left">
          <FlatsList flats={flats} />
        </div>
        <div className="right">
          <GoogleMapReact defaultCenter={{lng: 43, lat: 42.2}} defaultZoom={12} >
            <Marker lng={this.state.selectedFlat.lng} lat={this.state.selectedFlat.lat} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
