import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const FatalErrorEventSchema = withTypeBlueId(
  blueIds['Fatal Error Event']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    errorMessage: z.string().optional(),
    stackTrace: z.string().optional(),
  })
);

export type FatalErrorEvent = z.infer<typeof FatalErrorEventSchema>;
