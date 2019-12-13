import React, {Component} from 'react';
import Header from './components/web/Header';
import Footer from './components/web/Footer';
import Carousel from './components/web/Carousel';
import Sections from './components/web/Sections';
import './stylesheets/App.scss';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Carousel/>
        <Sections/>
        <Footer/>
      </div>
    );
  }

}

export default App;