import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from '@mui/material';
import useStyle from './styles';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const Sidebar = ({ mobileOpen }) => {
  const theme = useTheme();
  const classes = useStyle();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="logo"
        ></img>
      </Link>
      {/* <div></div> */}
    </>
  );
};

export default Sidebar;
