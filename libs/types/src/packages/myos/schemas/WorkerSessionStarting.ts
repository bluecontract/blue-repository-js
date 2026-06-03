import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const WorkerSessionStartingSchema: any = withTypeBlueId(
  blueIds['MyOS/Worker Session Starting']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    granteeDocumentId: zod.string().optional(),
    name: zod.string().optional(),
    targetDocumentType: zod.string().optional(),
  })
);

export type WorkerSessionStarting = z.infer<typeof WorkerSessionStartingSchema>;
