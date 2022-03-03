import { makeAutoObservable } from 'mobx';
import { getContentList } from '../api/requests';

import { Content } from '../api/types';

class ContentStore {
  constructor() {
    makeAutoObservable(this);
  }

  contents: Content[] = [];

  getContents = async () => {
    const contents = await getContentList();
    this.contents = [...contents];
  };
}

export default new ContentStore();
