import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { CategorizedRestaurantMenuSchema } from './CategorizedRestaurantMenu';
import { RestaurantMenuCategorySchema } from './RestaurantMenuCategory';

export const TrattoriaDaLuigiMenuSchema = withTypeBlueId(
  blueIds.TrattoriaDaLuigiMenu
)(
  CategorizedRestaurantMenuSchema.extend({
    name: z.string().optional(),
    categories: z
      .tuple([
        RestaurantMenuCategorySchema,
        RestaurantMenuCategorySchema,
        RestaurantMenuCategorySchema,
        RestaurantMenuCategorySchema,
        RestaurantMenuCategorySchema,
        RestaurantMenuCategorySchema,
        RestaurantMenuCategorySchema,
        RestaurantMenuCategorySchema,
        RestaurantMenuCategorySchema,
      ])
      .optional(),
  })
);

export type TrattoriaDaLuigiMenu = z.infer<typeof TrattoriaDaLuigiMenuSchema>;
