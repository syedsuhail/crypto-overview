import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import MarketOverview from './components/MarketOverview';
import Liquidity from './components/Liquidity';
import data from './data.json';
import {Grommet} from 'grommet';
import './App.css';

function App() {
  let [limit, updateLimit] = useState('10');
  return (
    <Router>
      <Grommet>
        <Header limit={limit} updateLimit={updateLimit}></Header>
        <Switch>
            <Route path="/liquidity">
              <Liquidity marketData={data}/>
            </Route>
            <Route path="/">
              <MarketOverview marketData={data}/>
            </Route>
          </Switch>
      </Grommet>
    </Router>
  );
}

export default App;
