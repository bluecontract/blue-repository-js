import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSchema } from './Document';

export const RecordSchema = withTypeBlueId(blueIds['Common/Record'])(
  DocumentSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Record = z.infer<typeof RecordSchema>;
