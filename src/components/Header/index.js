import React from 'react';
import {Link} from 'react-router-dom';
import { Text, Box, Select } from 'grommet';
import '../../App.css'

const Header = (props) => {
  return (
    <Box tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      responsive={true}>
      <div>
      Show
      <Select
        options={['10', '50', 'All']}
        value={props.limit}
        onChange={({ option }) => props.updateLimit(option)}
        margin={{"right": 0}}
        alignSelf="center"
        className="header-select"
      />
      Coins
      </div>
      <div>
        <Link to="/" className="link">
          <Text a11yTitle="Link to market overview"
            margin="medium"
            color="accent-3"
            >
              Market Overview
          </Text>
        </Link>
        <Link to="/liquidity" className="link"><Text a11yTitle="Link to liquidity analysis"
        margin="medium"
        color="accent-3">Liquidity Analysis</Text></Link>
      </div>
    </Box>
  )
}

export default Header;