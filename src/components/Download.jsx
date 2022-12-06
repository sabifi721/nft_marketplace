import React, { Component } from 'react';
import Pdf from '../assets/whitepaper.pdf'

class Download extends Component {

  render() {

    return (
        <div className = "App">
          <a href = {Pdf} target = "_blank">Whitepaper</a>
        </div>
    );

  }
}
export default Download;