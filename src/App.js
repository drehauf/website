import React, {Component} from 'react';
import Header from './components/web/Header';
import Footer from './components/web/Footer';
import FrameData from './components/web/Frames';
import Sections from './components/web/Sections';
import './stylesheets/App.scss';
import Carousel from './components/Carousel';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Carousel frameData={FrameData}/>
        <Sections />
        <Footer />
      </div>
    );
  }

}

export default App;