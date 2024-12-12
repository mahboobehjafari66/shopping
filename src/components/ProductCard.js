
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const existingItem = cartItems.find(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, name: product.name,  quantity: 1 }));
  };

  return (
    <Card style={{ margin: 16, width: 200 , height: 450 }}>
      <CardContent>
        <img src={product.image} alt={product.name} style={{ width: '100%', height: 200 }} />
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        <Button 
          onClick={handleAddToCart} 
          variant="contained" 
          color="primary" 
          style={{ marginTop: 10 }}
          disabled={existingItem && existingItem.quantity >= 30}  
        >
          Shop
        </Button>
        {existingItem && existingItem.quantity >= 30 && (
          <Typography color="error" variant="body2" style={{ marginTop: 5 }}>
            Maximum 30 allowed.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;


