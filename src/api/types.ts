import { PricingOption } from './enums';

export interface Content {
  id: string;
  creator: string;
  title: string;
  pricingOption: PricingOption;
  imagePath: string;
  price: number;
}
