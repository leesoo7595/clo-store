import { useContext, createContext } from 'react';
import ContentStore from './contentStore';

export const stores = {
  ContentStore,
};

export const storesContext = createContext({
  ...stores,
});

export const useStores = () => useContext(storesContext);
