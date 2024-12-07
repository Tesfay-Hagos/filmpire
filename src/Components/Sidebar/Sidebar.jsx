import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  ListItemButton,
} from "@mui/material";
import useStyle from "./styles";
import { Label } from "@mui/icons-material";
const blueLogo =
  "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";
const redLogo =
  "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];
const demoCategories = [
  { label: "Comedy", value: "comedy" },
  { label: "Action", value: "action" },
  { label: "Horror", value: "horror" },
  { label: "Animation", value: "animation" },
];
const Sidebar = ({ mobileOpen }) => {
  const theme = useTheme();
  const classes = useStyle();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="logo"
        ></img>
      </Link>
      <Divider />
      <List className={classes.list}>
        <ListSubheader>Categories</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <ListItemButton
            onClick={() => ({})}
            key={value}
            component={Link}
            to="/"
            className={classes.links}
          >
            {/* <ListItemIcon>
                <img
                  alt="this is genere"
                  src={redLogo}
                  className={classes.genereImages}
                  height={30}
                ></img>
              </ListItemIcon> */}
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
