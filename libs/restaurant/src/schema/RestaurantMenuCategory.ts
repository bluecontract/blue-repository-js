import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { RestaurantMenuDishSchema } from './RestaurantMenuDish';

export const RestaurantMenuCategorySchema = withTypeBlueId(
  blueIds.RestaurantMenuCategory
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    dishes: z.array(RestaurantMenuDishSchema).optional(),
  })
);

export type RestaurantMenuCategory = z.infer<
  typeof RestaurantMenuCategorySchema
>;
