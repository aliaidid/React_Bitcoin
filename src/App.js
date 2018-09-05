import React, { Component } from 'react';
// import axios from 'axios';
import {Route, Link} from 'react-router-dom';

import Satu from './component/hal1'
import Dua from './component/hal2'
import Tiga from './component/hal3'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <ul className="nav nav-tabs">
        <li className="nav-item active">
          <Link to="/satu"><i className="nav-link active" >Info harga Bitcoin</i></Link>
        </li>
        <li className="nav-item">
          <Link to="/dua"><i className="nav-link active" >Rupiah ke Bitcoin</i></Link>        
        </li>
        <li className="nav-item">
          <Link to="/tiga"><i className="nav-link active" >Bitcoin ke Rupiah</i></Link>        
        </li>
        </ul>
        <div>
        <Route path='/satu'component={Satu}/>
        <Route path='/dua'component={Dua}/>
        <Route path='/tiga'component={Tiga}/>
        </div>
      </div>
    );
  }
}

export default App;
