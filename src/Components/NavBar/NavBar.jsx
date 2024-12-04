import React from 'react'
import { AppBar,IconButton,Toolbar,
  Drawer,Button,Avatar,useMediaQuery,
  useTheme } from '@mui/material'
import {Menu,AccountCircle,
  Brightness4,Brightness7,
  Search} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import useStyles from './styles'
 

const NavBar = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  return (
    <AppBar position='fixed'>
    <Toolbar className={classes.toolbar}>
      {isMobile && (
        <IconButton
        color='inherit'
        edge='start'
        style={{outline: 'none'}}
        onClick={() => {}}
        className={classes.menuButton}
        >
          <Menu />
        </IconButton>
      )}
      <IconButton color='inherit' sx={{ml:1}} onClick={()=>({})}>
      {theme.palette.mode==='dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
      {!isMobile && 'Search...'}
      <div>
        {!isAuthenticated?(
          <Button color='inherit' onClick={()=> ({})}>
            Login &nbsp;
          </Button>
        ):(
          <Button 
          color='inherit'
          component={Link}
          to='/profile/:id'
          className={classes.linkButton}
          onClick={()=>({})}
          >
            {!isMobile && <>My Movies nbsb &nbsp;</>}
            <Avatar 
            style={{width:30,height:30}}
            alt='profile' 
            src='https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' 
            />
          </Button>
        )}
      </div>
      {isMobile && 'Search...'}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
