import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const WorkerAgencyPermissionRevokedSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Revoked']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type WorkerAgencyPermissionRevoked = z.infer<
  typeof WorkerAgencyPermissionRevokedSchema
>;
