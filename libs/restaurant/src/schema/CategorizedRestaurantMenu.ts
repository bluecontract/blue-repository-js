import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RestaurantMenuCategorySchema } from './RestaurantMenuCategory';

export const CategorizedRestaurantMenuSchema = withTypeBlueId(
  blueIds['Categorized Restaurant Menu']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    categories: z.array(RestaurantMenuCategorySchema).optional(),
  })
);

export type CategorizedRestaurantMenu = z.infer<
  typeof CategorizedRestaurantMenuSchema
>;
