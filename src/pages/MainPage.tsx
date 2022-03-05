import React, { useState, useEffect, ChangeEvent } from 'react';
import { useStores } from '../stores';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ShopItemCard from '../components/ShopItemCard';
import Searchbar from '../components/Searchbar';
import CheckboxList from '../components/CheckboxList';
import { Content } from '../api/types';

const MainPage = () => {
  const { ContentStore } = useStores();
  const { contents, getContents } = ContentStore;

  const [input, setInput] = useState('');
  const [checkList, setCheckList] = useState({
    PAID: false,
    FREE: false,
    VIEW_ONLY: false,
  });

  useEffect(() => {
    getContents();
  }, []);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleChangeCheckList = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckList({
      ...checkList,
      [e.target.name]: e.target.checked,
    });
  };

  const handleClickResetCheckList = () => {
    setCheckList({
      PAID: false,
      FREE: false,
      VIEW_ONLY: false,
    });
  };

  return (
    <div>
      <Searchbar
        id="basic"
        name="basic"
        label="basic"
        onChange={handleChangeInput}
        value={input}
      />
      <CheckboxList checkValues={checkList} onChange={handleChangeCheckList} />
      <Button onClick={handleClickResetCheckList}>reset</Button>
      <Grid container spacing={2}>
        {contents.map((content: Content) => (
          <Grid key={content.title} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ShopItemCard
              key={content.title}
              title={content.title}
              imagePath={content.imagePath}
              creator={content.creator}
              price={content.price}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MainPage;
