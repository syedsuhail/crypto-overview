import React from 'react';

const Header = (props) => {
  return (
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
  )
}

export default Header;