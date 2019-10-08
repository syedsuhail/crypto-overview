import React from 'react';
import {Box, Table, TableCell, TableHeader, TableRow, TableBody} from 'grommet'
import '../../App.css';

let locale = Intl.NumberFormat().resolvedOptions().locale;
const formatCurrency = (value) => {
  return Intl.NumberFormat(locale, {maximumFractionDigits: 2,
    currency:'USD',
    style:'currency'}).format(value);
}

const formatPercent = (value) => {
  return Intl.NumberFormat(locale, {style:'percent',maximumFractionDigits:2}).format(value);
}

const MarketOverview = (props) => {
  return (<Box margin="medium" responsive="true">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              Rank
            </TableCell>
            <TableCell scope="col" border="bottom">
              Name
            </TableCell>
            <TableCell scope="col" border="bottom" >Price</TableCell>
            <TableCell scope="col" border="bottom" >Price Change</TableCell>
            <TableCell scope="col" border="bottom" >Market Cap</TableCell>
            <TableCell scope="col" border="bottom" >Volume</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
        {props.marketData.slice(0,props.limit).map((data)=> {
          return (
            <TableRow>
              <TableCell>{data.cmc_rank}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{formatCurrency(data.quote.USD.price)}</TableCell>
              <TableCell>
                <span className={data.quote.USD.percent_change_24h > 0 ? 'positive'
                : 'negative'}>{formatPercent(data.quote.USD.percent_change_24h)}</span>
              </TableCell>
              <TableCell>{formatCurrency(data.quote.USD.market_cap)}</TableCell>
              <TableCell>{formatCurrency(data.quote.USD.volume_24h)}</TableCell>
            </TableRow>
          )
        })}
        </TableBody>
      </Table>
    </Box>)
}

export default MarketOverview