import React, {Component} from 'react';
import Header from './components/Header';
import Carousel from './components/other/Carousel';
import Sections from './components/Sections';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Carousel/>
        <Sections/>
      </div>
    );
  }

}

export default App;
