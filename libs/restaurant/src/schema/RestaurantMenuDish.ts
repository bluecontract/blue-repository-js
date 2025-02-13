import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const RestaurantMenuDishSchema = withTypeBlueId(
  blueIds.RestaurantMenuDish
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    price: z.number().optional(),
  })
);

export type RestaurantMenuDish = z.infer<typeof RestaurantMenuDishSchema>;
