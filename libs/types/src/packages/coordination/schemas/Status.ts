import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentStatusSchema } from './DocumentStatus';

const zod = z as any;

export const StatusSchema: any = withTypeBlueId(blueIds['Coordination/Status'])(
  DocumentStatusSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type Status = z.infer<typeof StatusSchema>;
