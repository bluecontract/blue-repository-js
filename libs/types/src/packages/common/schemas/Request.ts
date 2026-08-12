import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSchema } from './Document';

const zod = z as any;

export const RequestSchema: any = withTypeBlueId(blueIds['Common/Request'])(
  DocumentSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type Request = z.infer<typeof RequestSchema>;
