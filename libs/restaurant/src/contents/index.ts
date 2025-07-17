import { restaurantMenuDish } from './RestaurantMenuDish';
import { trattoriaDaLuigiMenu } from './TrattoriaDaLuigiMenu';
import { categorizedRestaurantMenu } from './CategorizedRestaurantMenu';
import { restaurantMenuCategory } from './RestaurantMenuCategory';

export const contents = {
  '2VaxpRZCMZevaePM8Np23C4NfCMztq4rVGpfbEKufXm2': restaurantMenuDish,
  '9hCA2fr81fXLAhjPPP3gGKCSamt7ATtFTKTK4uFrUaAk': trattoriaDaLuigiMenu,
  CUWyYvvyxrZTQYWEDmTwoYhM4aCUy4oatCGoTZc71gQC: categorizedRestaurantMenu,
  F5AqRjfVt8iSCDnA4mGv2PKeDYX8BZXCv9mLTRZr6w6n: restaurantMenuCategory,
} as const;
