import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { MarkerSchema } from '../../core/schemas/Marker';

export const OperationSchema = withTypeBlueId(
  blueIds['Conversation/Operation']
)(
  MarkerSchema.extend({
    channel: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    request: blueNodeField().optional(),
  })
);

export type Operation = z.infer<typeof OperationSchema>;
