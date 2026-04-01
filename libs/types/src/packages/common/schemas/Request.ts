import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSchema } from './Document';

export const RequestSchema = withTypeBlueId(blueIds['Common/Request'])(
  DocumentSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Request = z.infer<typeof RequestSchema>;
