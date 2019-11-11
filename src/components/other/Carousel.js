import React, {Component} from 'react';
import '../../Carousel.css';

class Carousel extends Component {

  render() {
    return (
      <div id="carousel">
        <img id="frame-placeholder" src="%src" alt="%alt"/>
        <div id="float">
          <h2>%caption</h2>
          <p>%text</p>
          <a href="%href">%actiontext</a>
        </div>
      </div>
    );
  }

}

export default Carousel;