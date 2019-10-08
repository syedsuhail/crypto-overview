import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import MarketOverview from './components/MarketOverview';
import Liquidity from './components/Liquidity';
import data from './data.json';

import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import { Grid, Grommet, ResponsiveContext, ThemeContext} from 'grommet';

const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      xsmall: {
        value: 500
      },
      small: {
        value: 900
      },
      medium: undefined,
      middle: {
        value: 3000
      }
    }
  }
});


let value = {
  select: {
    container: {
      extend: {

      }
    }
  }
}

function App() {
  let [limit, updateLimit] = useState('10');
  let limitNumber = data.length;
  if(limit !== "All") {
    limitNumber = parseInt(limit);
  }
  return (
    <Router>
      <Grommet theme={customBreakpoints}>
        <ThemeContext.Extend value={value}>
        <ResponsiveContext.Consumer>
        {(size) => {
        return <Grid
          rows={["xsmall","full"]}
          columns={"1fr"}

        >
        <Header gridArea="header" limit={limit} updateLimit={updateLimit} ></Header>
        <Switch>
            <Route path="/liquidity">
                    <Liquidity marketData={data} limit={limitNumber} gridArea="main"/>
            </Route>
            <Route path="/">
                  <MarketOverview marketData={data} limit={limitNumber} gridArea="main"/>
            </Route>
          </Switch>
          </Grid>
        }}
          </ResponsiveContext.Consumer>
        </ThemeContext.Extend>
      </Grommet>
    </Router>
  );
}

export default App;
