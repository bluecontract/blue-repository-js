import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RestaurantMenuDishSchema } from './RestaurantMenuDish';

export const RestaurantMenuCategorySchema = withTypeBlueId(
  blueIds['Restaurant Menu Category']
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
