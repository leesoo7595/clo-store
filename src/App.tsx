import React from 'react';
import { observer } from 'mobx-react-lite';
import MainPage from './pages/MainPage';

const App = observer(() => {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
});

export default App;
