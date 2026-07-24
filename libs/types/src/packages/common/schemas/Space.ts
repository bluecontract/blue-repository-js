import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSchema } from './Document';

const zod = z as any;

export const SpaceSchema: any = withTypeBlueId(blueIds['Common/Space'])(
  DocumentSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    website: zod.string().optional(),
  })
);

export type Space = z.infer<typeof SpaceSchema>;
