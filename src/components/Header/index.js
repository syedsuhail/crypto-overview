import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <div>
      Show
      &nbsp;
      <select data-testid="limit-select" value={props.limit} onChange={(e) => props.updateLimit(e.target.value)}>
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="">All</option>
      </select>
      &nbsp;Coins
      </div>
      <div>
        <Link to="/">Market Overview</Link>
        <Link to="/liquidity">Liquidity Analysis</Link>
      </div>
    </div>
  )
}

export default Header;