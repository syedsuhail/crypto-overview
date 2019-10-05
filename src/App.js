import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import MarketOverview from './components/MarketOverview';
import Liquidity from './components/Liquidity';
import './App.css';

function App() {

  let [limit, updateLimit] = useState('10');
  return (
    <Router>
      <div className="App">
        <Header limit={limit} updateLimit={updateLimit}></Header>
        <Switch>
            <Route path="/">
              <MarketOverview />
            </Route>
            <Route path="/liquidity">
              <Liquidity />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
