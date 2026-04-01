import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSchema } from './Document';

export const ServiceSchema = withTypeBlueId(blueIds['Common/Service'])(
  DocumentSchema.extend({
    categories: z.array(z.string()).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Service = z.infer<typeof ServiceSchema>;
