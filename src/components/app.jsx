import React, { Component } from 'react';
import FlatsList from './flats_list';
import flats from '../../data/flats';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {

    };
  }

  render() {

    return(
      <div>
        <div className="left">
          <FlatsList flats={flats} />
        </div>
        <div className="right">
          <h1>Hello</h1>
        </div>
      </div>
    );
  }
}

export default App;
