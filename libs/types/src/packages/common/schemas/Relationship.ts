import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSchema } from './Document';

const zod = z as any;

export const RelationshipSchema: any = withTypeBlueId(
  blueIds['Common/Relationship']
)(
  DocumentSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type Relationship = z.infer<typeof RelationshipSchema>;
