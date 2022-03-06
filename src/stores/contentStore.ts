import { makeAutoObservable } from 'mobx';
import { PricingOption } from '../api/enums';
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

  getContentsByPricingOptions = async (options: string[]) => {
    console.log(options);
    const contents = await getContentList();
    const pricingOptions = options.map(
      (option) => PricingOption[option as keyof typeof PricingOption]
    );
    this.contents = [
      ...contents.filter((content) =>
        pricingOptions.includes(content.pricingOption)
      ),
    ];
  };
}

export default new ContentStore();
