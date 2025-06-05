import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const RestaurantMenuDishSchema = withTypeBlueId(
  blueIds['Restaurant Menu Dish']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    price: z.number().optional(),
  })
);

export type RestaurantMenuDish = z.infer<typeof RestaurantMenuDishSchema>;
