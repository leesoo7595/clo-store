import React, { useEffect } from 'react';
import { useStores } from './stores';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  const { ContentStore } = useStores();
  const { contents, getContents } = ContentStore;

  useEffect(() => {
    getContents();
  }, []);

  return (
    <div className="App">
      {contents.map((content) => (
        <div key={content.title}>{content.title}</div>
      ))}
    </div>
  );
});

export default App;
