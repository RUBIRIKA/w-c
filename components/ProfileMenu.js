import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/solid';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
       
      <div 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
           <UserIcon className="h-6  cursor-pointer"/>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}

        sx={{
            ".MuiPaper-root": {
                marginTop: "0.5rem",
                minWidth:"100px",
                borderRadius:"1rem",
                boxShadow:"0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
            },
        }}
      >
        <MenuItem onClick={handleClose}><small><strong>Sign-In</strong></small></MenuItem>
        <MenuItem onClick={handleClose}><small><strong>Sign-Up</strong></small></MenuItem>
        
      </Menu>
    </div>
  );
}