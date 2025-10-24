import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const CaptureDeclinedSchema = withTypeBlueId(
  blueIds['Capture Declined']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.unknown().optional(),
  })
);

export type CaptureDeclined = z.infer<typeof CaptureDeclinedSchema>;
