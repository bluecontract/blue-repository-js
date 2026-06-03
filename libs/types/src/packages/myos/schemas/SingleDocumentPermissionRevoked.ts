import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const SingleDocumentPermissionRevokedSchema: any = withTypeBlueId(
  blueIds['MyOS/Single Document Permission Revoked']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type SingleDocumentPermissionRevoked = z.infer<
  typeof SingleDocumentPermissionRevokedSchema
>;
