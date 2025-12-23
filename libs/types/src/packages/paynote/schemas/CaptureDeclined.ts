import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const CaptureDeclinedSchema = withTypeBlueId(
  blueIds['PayNote/Capture Declined']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type CaptureDeclined = z.infer<typeof CaptureDeclinedSchema>;
