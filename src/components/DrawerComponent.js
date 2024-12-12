
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Button, Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../features/cartSlice';

const DrawerComponent = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Drawer anchor='right' open={open} onClose={onClose}>
      <List style={{ width: 450 }}>
        <ListItem>
          <ListItemText primary="Shopping Cart" />
        </ListItem>
        {cartItems.length === 0 ? (
          <Typography variant="body1" style={{ padding: 20 }}>
            Your cart is empty.
          </Typography>
        ) : (
          cartItems.map((item) => (
            <ListItem key={item.id}>
              <Box style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <ListItemText
                  primary={item.name}
                  
                  style={{ flexGrow: 1 }}
                />
                <div style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
                  <Button onClick={() => dispatch(decreaseQuantity(item.id))} variant="outlined" color="primary">-</Button>
                  <Box mx={1}>{item.quantity}</Box>
                  <Button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    variant="outlined"
                    color="primary"
                    disabled={item.quantity >= 30}
                  >
                    +
                  </Button>
                  {item.quantity >= 30 && (
                    <Typography color="error" variant="body2" style={{ marginLeft: 10 }}>
                      Maximum 30 allowed.
                    </Typography>
                  )}
                  <Button onClick={() => dispatch(removeFromCart(item.id))} variant="outlined" color="secondary" style={{ marginLeft: 5 }}>
                    Remove
                  </Button>
                </div>
              </Box>
            </ListItem>
          ))
        )}
      </List>
    </Drawer>
  );
};

export default DrawerComponent;

