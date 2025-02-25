import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { RestaurantMenuCategorySchema } from './RestaurantMenuCategory';

export const TrattoriaDaLuigiMenuSchema = withTypeBlueId(
  blueIds.TrattoriaDaLuigiMenu
)(
  z.object({
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
