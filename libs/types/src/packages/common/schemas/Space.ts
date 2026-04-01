import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSchema } from './Document';
import { DocumentAnchorsSchema } from './DocumentAnchors';

export const SpaceSchema = withTypeBlueId(blueIds['Common/Space'])(
  DocumentSchema.extend({
    anchors: DocumentAnchorsSchema.optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    website: z.string().optional(),
  })
);

export type Space = z.infer<typeof SpaceSchema>;
