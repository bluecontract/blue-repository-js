import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const TriggerEventSchema = withTypeBlueId(blueIds['Trigger Event'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    event: blueNodeField().optional(),
  })
);

export type TriggerEvent = z.infer<typeof TriggerEventSchema>;
