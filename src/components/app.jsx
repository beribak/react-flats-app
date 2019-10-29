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
        lng: flats[0].lng,
        lat: flats[0].lat
      }
    };
  }

  selectFlat = (lng, lat) => {
    this.setState({
      selectedFlat: {
        lng: lng,
        lat: lat
      }
    });
  }

  render() {

    return(
      <div>
        <div className="left">
          <FlatsList flats={flats} selectFlat={this.selectFlat} />
        </div>
        <div className="right">
          <GoogleMapReact defaultCenter={this.state.selectedFlat} defaultZoom={11} >
            <Marker lng={this.state.selectedFlat.lng} lat={this.state.selectedFlat.lat} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
