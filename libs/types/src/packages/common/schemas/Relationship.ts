import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSchema } from './Document';

export const RelationshipSchema = withTypeBlueId(
  blueIds['Common/Relationship']
)(
  DocumentSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Relationship = z.infer<typeof RelationshipSchema>;
