import React from 'react';
import {Link} from 'react-router-dom';
import { Anchor, Box, Menu } from 'grommet';

const Header = (props) => {
  return (
    <Box tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}>
      <div>
      Show
      <Menu
        label={props.limit}
        items={[
          { label: '10', onClick: () => {props.updateLimit(10)} },
          { label: '50', onClick: () => {props.updateLimit(50)} },
          { label: 'All', onClick: () => {props.updateLimit('All')}}
        ]}
      />
      Coins
      </div>
      <div>
        <Anchor a11yTitle="Link to market overview"
        margin="medium"
        >
        <Link to="/">Market Overview</Link>
        </Anchor>
        <Anchor a11yTitle="Link to liquidity analysis"
        margin="medium">
        <Link to="/liquidity">Liquidity Analysis</Link>
        </Anchor>
      </div>
    </Box>
  )
}

export default Header;