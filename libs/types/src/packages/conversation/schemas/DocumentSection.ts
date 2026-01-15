import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MarkerSchema } from '../../core/schemas/Marker';

export const DocumentSectionSchema = withTypeBlueId(
  blueIds['Conversation/Document Section']
)(
  MarkerSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    relatedContracts: z.array(z.string()).optional(),
    relatedFields: z.array(z.string()).optional(),
  })
);

export type DocumentSection = z.infer<typeof DocumentSectionSchema>;
