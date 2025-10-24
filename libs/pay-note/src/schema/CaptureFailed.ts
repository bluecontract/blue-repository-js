import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const CaptureFailedSchema = withTypeBlueId(blueIds['Capture Failed'])(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.unknown().optional(),
  })
);

export type CaptureFailed = z.infer<typeof CaptureFailedSchema>;
