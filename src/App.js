import React from 'react';
import List from './List';
import Add from './Add';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import history from './history';
import Header from './Header/Header';
import Update from './Update';
import Calc from './Calc/Calc';
import Sip from './Sip/Sip';

function App() {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Routes>
          <Route path='/' element={<List/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/update' element={<Update/>} />
          <Route path='/calc' element={<Calc />} />
          <Route path='/sip' element={<Sip />} />
        </Routes>
      </Router>
    </div>);
}

export default App;
