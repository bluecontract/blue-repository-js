import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const WorkerAgencyPermissionRevokedSchema: any = withTypeBlueId(
  blueIds['MyOS/Worker Agency Permission Revoked']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type WorkerAgencyPermissionRevoked = z.infer<
  typeof WorkerAgencyPermissionRevokedSchema
>;
