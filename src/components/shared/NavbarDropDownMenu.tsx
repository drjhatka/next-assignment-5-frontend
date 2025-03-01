"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Link from 'next/link';
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {logoutUser} from "@/app/actions/UserActions";
import {logOut} from "@/lib/features/auth/authSlice";

export default function NavbarDropDownMenu() {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const authUser = useAppSelector(state => state.auth);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  //console.log("auth ",authUser.auth);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut =async () => {

    const res =await logoutUser()
    dispatch(logOut())
    console.log("RES ",res)
  }

  return (
      <>
      { authUser.accessToken ?
          <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >

              <Avatar sx={{ width: 32, height: 32 }}>{ authUser?.email?.slice(0,1).toUpperCase()}</Avatar>
          </IconButton>
        </Tooltip>

      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />

        <Link href={'/register'}>
        <MenuItem onClick={handleClose} >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Register
        </MenuItem>
        </Link>
        <Link href={'/login'}>
        <MenuItem onClick={handleClose} >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Login
        </MenuItem>
        </Link>
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
</React.Fragment>:
            <Link href={'/login'} className='text-white font-bold'>Login</Link>
      }
      </>
  );
}
