import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const WorkerAgencyPermissionInvalidSchema: any = withTypeBlueId(
  blueIds['MyOS/Worker Agency Permission Invalid']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    issues: zod.array(zod.string()).optional(),
    name: zod.string().optional(),
  })
);

export type WorkerAgencyPermissionInvalid = z.infer<
  typeof WorkerAgencyPermissionInvalidSchema
>;
