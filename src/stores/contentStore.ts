import { makeAutoObservable } from 'mobx';
import { PricingOption } from '../api/enums';
import { getContentList } from '../api/requests';

import { Content } from '../api/types';
import { addSearchParam, removeSearchParams } from '../utils/searchParams';

class ContentStore {
  constructor() {
    makeAutoObservable(this);
  }

  contents: Content[] = [];

  getContents = async () => {
    removeSearchParams();
    const contents = await getContentList();
    this.setContents(contents);
  };

  getContentsByPricingOptions = async (options: string[]) => {
    removeSearchParams();
    const contents = await getContentList();
    options.forEach((option) => {
      addSearchParam(
        option,
        PricingOption[option as keyof typeof PricingOption]
      );
    });
    const pricingOptions = options.map(
      (option) => PricingOption[option as keyof typeof PricingOption]
    );
    this.setContents(
      contents.filter((content) =>
        pricingOptions.includes(content.pricingOption)
      )
    );
  };

  setContents = (contents: Content[]) => {
    this.contents = [...contents];
  };
}

export default new ContentStore();
