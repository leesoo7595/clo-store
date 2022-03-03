import { PricingOption } from './enums';
import { Content } from './types';

export async function getContentList(
  pricingOption?: PricingOption
): Promise<Content[]> {
  const response = await fetch(
    'https://closet-sample.azurewebsites.net/api/data'
  );
  return await response.json();
}
