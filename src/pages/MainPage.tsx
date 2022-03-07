import React, { useState, useEffect, ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../stores';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ShopItemCard from '../components/ShopItemCard';
import Searchbar from '../components/Searchbar';
import CheckboxList from '../components/CheckboxList';
import { Content } from '../api/types';
import { getSearchParamKeys } from '../utils/searchParams';

const MainPage = observer(() => {
  const { ContentStore } = useStores();
  const { contents, getContents, getContentsByPricingOptions } = ContentStore;

  const initCheckInfo = {
    PAID: false,
    FREE: false,
    VIEW_ONLY: false,
  };

  const [input, setInput] = useState('');
  const [checkInfo, setCheckInfo] = useState(initCheckInfo);

  useEffect(() => {
    if (getSearchParamKeys().length > 0) {
      getSearchParamKeys().forEach((key) => {
        setCheckInfo((prevState) => ({
          ...prevState,
          [key]: true,
        }));
      });
      getContentsByPricingOptions(getSearchParamKeys());
    } else {
      getContents();
    }
  }, []);

  useEffect(() => {
    if (!checkInfo.PAID && !checkInfo.FREE && !checkInfo.VIEW_ONLY) {
      getContents();
    } else {
      const filteredCheckInfoList = Object.entries(checkInfo)
        .filter(([k, v]) => v)
        .map((check) => check[0]);
      getContentsByPricingOptions(filteredCheckInfoList);
    }
  }, [checkInfo, getContents, getContentsByPricingOptions]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleChangeCheckList = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckInfo({ ...checkInfo, [e.target.name]: e.target.checked });
  };

  const handleClickResetCheckList = () => {
    setCheckInfo(initCheckInfo);
    setInput('');
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
      <CheckboxList checkValues={checkInfo} onChange={handleChangeCheckList} />
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
});

export default MainPage;
