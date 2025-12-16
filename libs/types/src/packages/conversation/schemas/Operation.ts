import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { MarkerSchema } from '../../core/schemas/Marker';

export const OperationSchema = withTypeBlueId(blueIds['Conversation/Operation'])(
  MarkerSchema.extend({
    "request": blueNodeField().optional(),
    "channel": z.string().optional()
  })
);

export type Operation = z.infer<typeof OperationSchema>;
