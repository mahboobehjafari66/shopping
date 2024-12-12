import React, { useState } from 'react';
import appleWatchImage from "./assets/images/appleWatch.jpg";
import iphoneImage from "./assets/images/iphone.png";
import airpodsImage from "./assets/images/airpods.jpg";
import { Provider } from 'react-redux';
import { Container } from '@mui/material';
import store from './store';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import DrawerComponent from './components/DrawerComponent';

const products = [
  { id: 1, name: 'appleWatchImage', description: " Lizards are a widespread group of squamate reptiles, with over 6 species, ranging across all continents except Antarctica", image: appleWatchImage },
  { id: 2, name: 'iphoneImage', description: " Lizards are a widespread group of squamate reptiles, with over 6 species, ranging across all continents except Antarctica", image: iphoneImage },
  { id: 3, name: 'airpodsImage', description:  " Lizards are a widespread group of squamate reptiles, with over 6 species, ranging across all continents except Antarctica", image: airpodsImage}]

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Provider store={store}>
      <Header onOpenDrawer={toggleDrawer(true)} />
      <Container>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
      <DrawerComponent open={drawerOpen} onClose={toggleDrawer(false)} />
    </Provider>
  );
};

export default App;

