import React, { Component } from 'react';
import FlatsList from './flats_list';
import FlatsList from './flat';

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
          <h1>Hello</h1>
        </div>
        <div className="right">
          <h1>Hello</h1>
        </div>
      </div>
    );
  }
}

export default App;
