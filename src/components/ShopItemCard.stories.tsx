import React from 'react';
import Grid from '@mui/material/Grid';
import ShopItemCard from './ShopItemCard';

export default {
  component: ShopItemCard,
  title: 'Components/ShopItemCard',
};

const shopItemList = [
  {
    id: 'content-001',
    creator: 'Adam',
    title: 'Yellow green coat',
    pricingOption: 0,
    imagePath:
      'https://storageaccountcloseb093.blob.core.windows.net/frontend-recruiting-sample/thumbnails/FE%20Test%20Material/thumbnail_1.jpeg',
    price: 50,
  },
  {
    id: 'content-002',
    creator: 'Benny',
    title: 'Brown Anorak',
    pricingOption: 1,
    imagePath:
      'https://storageaccountcloseb093.blob.core.windows.net/frontend-recruiting-sample/thumbnails/FE%20Test%20Material/thumbnail_2.png',
    price: 30,
  },
  {
    id: 'content-003',
    creator: 'Catlin',
    title: 'Block shape mini bag',
    pricingOption: 2,
    imagePath:
      'https://storageaccountcloseb093.blob.core.windows.net/frontend-recruiting-sample/thumbnails/FE%20Test%20Material/thumbnail_3.jpeg',
    price: 15,
  },
];

export const ShopItemCardList = () => {
  return (
    <Grid container spacing={2}>
      {shopItemList.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <ShopItemCard
            key={item.title}
            title={item.title}
            imagePath={item.imagePath}
            creator={item.creator}
            price={item.price}
          />
        </Grid>
      ))}
    </Grid>
  );
};
