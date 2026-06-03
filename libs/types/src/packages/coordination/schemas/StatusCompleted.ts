import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentStatusSchema } from './DocumentStatus';

const zod = z as any;

export const StatusCompletedSchema: any = withTypeBlueId(
  blueIds['Coordination/Status Completed']
)(
  DocumentStatusSchema.extend({
    description: zod.string().optional(),
    mode: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type StatusCompleted = z.infer<typeof StatusCompletedSchema>;
