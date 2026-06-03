import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const WorkerAgencyPermissionValidatedSchema: any = withTypeBlueId(
  blueIds['MyOS/Worker Agency Permission Validated']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type WorkerAgencyPermissionValidated = z.infer<
  typeof WorkerAgencyPermissionValidatedSchema
>;
