import React from 'react';
import {Box, Table, TableCell, TableHeader, TableRow, TableBody} from 'grommet'

const MarketOverview = (props) => {
  return (<Box margin="medium">
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
        {props.marketData.map((data)=> {
          return (
            <TableRow>
              <TableCell>{data.cmc_rank}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.quote.USD.price}</TableCell>
              <TableCell>{data.quote.USD.percent_change_24h}</TableCell>
              <TableCell>{data.quote.USD.market_cap}</TableCell>
              <TableCell>{data.quote.USD.volume_24h}</TableCell>
            </TableRow>
          )
        })}
        </TableBody>
      </Table>
    </Box>)
}

export default MarketOverview