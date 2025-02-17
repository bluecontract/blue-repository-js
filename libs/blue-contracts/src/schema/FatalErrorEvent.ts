import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const FatalErrorEventSchema = withTypeBlueId(blueIds.FatalErrorEvent)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    errorMessage: z.string().optional(),
    stackTrace: z.string().optional(),
  })
);

export type FatalErrorEvent = z.infer<typeof FatalErrorEventSchema>;
