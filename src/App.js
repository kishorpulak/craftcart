import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

// import './assets/styles.css';

class App extends React.Component {
  constructor() 
  {
    super();
    this.state={
      // fname: "",
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="contentCover">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Content />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
