import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentStatusSchema } from './DocumentStatus';

const zod = z as any;

export const StatusFailedSchema: any = withTypeBlueId(
  blueIds['Coordination/Status Failed']
)(
  DocumentStatusSchema.extend({
    description: zod.string().optional(),
    mode: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type StatusFailed = z.infer<typeof StatusFailedSchema>;
