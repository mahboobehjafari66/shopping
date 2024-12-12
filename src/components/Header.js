import React from 'react';
import { AppBar, Toolbar, Typography, Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const Header = ({ onOpenDrawer }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <AppBar position="static" style={{ backgroundColor: '#2196F3' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Shop
        </Typography>
        <IconButton color="inherit" onClick={onOpenDrawer}>
          <Badge badgeContent={totalQuantity} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

