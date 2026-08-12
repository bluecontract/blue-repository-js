import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSchema } from './Document';

const zod = z as any;

export const ServiceSchema: any = withTypeBlueId(blueIds['Common/Service'])(
  DocumentSchema.extend({
    categories: zod.array(zod.string()).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type Service = z.infer<typeof ServiceSchema>;
