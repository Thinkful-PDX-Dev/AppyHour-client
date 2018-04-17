import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to AppyHour</h1>
        </header>

<main role="main">

    <div className="row">
      <div className="col-md-12">
        <h2>Really Fantastic Bar</h2>

        <ul>
          <li><strong>Location</strong>: 666 Sesame Street</li>
          <li><strong>Hours</strong>: 3-7pm M-F, 2-6 Sa-Su</li>
        </ul>

        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum laoreet odio vel porttitor. Nullam a rutrum velit. Curabitur ullamcorper faucibus ullamcorper. Nunc est arcu, dapibus ut enim in, malesuada placerat ligula. Donec et mollis tortor. Nunc eget ex molestie, dignissim sapien ut, mollis purus. Donec et dolor eget ex congue tristique. In convallis est quis orci sagittis sagittis.</p>

      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 text-left"><i className="fas fa-arrow-alt-circle-left fa-3x"></i></div>
      <div className="col-sm-6 text-right"><i className="fas fa-arrow-alt-circle-right fa-3x"></i></div>
    </div>

  </main>

      </div>
    );
  }
}

export default App;
