import React from 'react';

const MarketOverview = (props) => {
  return (<div>
      <table>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
          <th>Price Change</th>
          <th>Market Cap</th>
          <th>Volume</th>
        </tr>
        {props.marketData.map((data)=> {
          return (
            <tr>
              <td>{data.cmc_rank}</td>
              <td>{data.name}</td>
              <td>{data.quote.USD.price}</td>
              <td>{data.quote.USD.percent_change_24h}</td>
              <td>{data.quote.USD.market_cap}</td>
              <td>{data.quote.USD.volume_24h}</td>
            </tr>
          )
        })}
      </table>
    </div>)
}

export default MarketOverview