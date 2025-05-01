'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Tabs, Tab, useMediaQuery, useTheme } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import TimelineIcon from '@mui/icons-material/Timeline';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu
} from '@mui/material';
import { Home } from '@mui/icons-material';
import CssBaseline from '@mui/material/CssBaseline';
import HideOnScroll from './HideOnScroll';

const NavbarUI = () => {
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const tabs = [
    { value: '1', label: 'Home', icon: <Home />, href: '/' },
    { value: '4', label: 'Projects', icon: <TimelineIcon />, href: '/projects' },
    { value: '2', label: 'About', icon: <InfoIcon />, href: '/about' },
    // { value: '3', label: 'Skills', icon: <ManageAccountsIcon />, href: '/skills' },
    { value: '5', label: 'Blogs', icon: <AddReactionIcon />, href: '/blogs' },
    { value: '6', label: 'Contact', icon: <ContactMailIcon />, href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href) || false;
  };

  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar
          className='navbar1'
          style={{
            width: '93.5%',
            right: '3.2%',
            borderRadius: '30px',
            background:
              'linear-gradient( 60deg, rgba(85, 18, 228, 0.647) 0%, rgba(19, 53, 138, 0.696) 100% )',
          }}
        >
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              <Typography
                variant='h6'
                noWrap
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'orange',
                  textDecoration: 'none',
                }}
                className='cursorp'
              >
                <Avatar
                  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                  className='cursorp Tab8 animate__animated animate__backInLeft'
                >
                  <Typography className=' font-bold text-3xl bg-red-500 rounded-full p-5' >
                  BK
                  </Typography>
                  {/* <Image
                    src={logo}
                    style={{ width: '100%', height: 'auto' }}
                    alt='logo'
                    width={100}
                    height={100}
                    loading='lazy'
                  /> */}
                </Avatar>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <Typography
                variant='h5'
                noWrap
                component='a'
                href=''
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  fontSize:'.9rem',
                  textDecoration: 'none',
                }}
              >
                <Avatar sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                <Typography className=' font-bold text-3xl bg-red-500 rounded-full p-5' >
                  BK
                  </Typography>
                  {/* <Image
                    src={logo}
                    style={{ width: '100%', height: 'auto' }}
                    alt='logo'
                    width={100}
                    height={100}
                    loading='lazy'
                  /> */}
                </Avatar>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {isMatch ? (
                  <IconButton
                    size='large'
                    aria-label='account of current user'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    onClick={handleOpenNavMenu}
                    color='inherit'
                  >
                    <MenuIcon />
                  </IconButton>
                ) : (
                  <Tabs 
                    value={false} // Disable built-in selection
                    centered 
                    sx={{ margin: 'auto' }}
                  >
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.value}
                        value={tab.value}
                        label={
                          <Link
                            href={tab.href}
                            style={{
                              textDecoration: 'none',
                              color: isActive(tab.href) ? '#ffdddd' : 'white',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            {tab.icon}
                            {tab.label}
                          </Link>
                        }
                        className={`animate__animated animate__zoomIn ${isActive(tab.href) ? 'active-tab' : ''}`}
                        sx={{
                          '&.active-tab': {
                            borderBottom: '2px solid #ffffff',
                            
                            fontWeight: 'bold',
                          },
                          '&:hover': {
                            opacity: 0.9,
                          },
                        }}
                      />
                    ))}
                  </Tabs>
                )}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                {/* <NavbarDropDownMenu /> */}

                <Menu
                  id='menu-appbar-avatar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <List className='DrawerList w-56'>
                    {tabs.map((tab) => (
                      <ListItemButton
                        key={tab.value}
                        selected={isActive(tab.href)}
                        sx={{
                          backgroundColor: isActive(tab.href)
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'transparent',
                          '&.Mui-selected': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          },
                        }}
                        onClick={handleCloseNavMenu}
                      >
                        <ListItemIcon sx={{ color: isActive(tab.href) ? '#ff0000' : 'inherit' }}>
                          {tab.icon}
                        </ListItemIcon>
                        <Link
                          href={tab.href}
                          style={{
                            textDecoration: 'none',
                            color: isActive(tab.href) ? '#ff0000' : 'inherit',
                            width: '100%',
                          }}
                        >
                          <ListItemText 
                            primary={tab.label} 
                            primaryTypographyProps={{
                              fontWeight: isActive(tab.href) ? 'bold' : 'normal',
                            }}
                          />
                        </Link>
                      </ListItemButton>
                    ))}
                  </List>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default NavbarUI;