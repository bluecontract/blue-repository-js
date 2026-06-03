import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

const zod = z as any;

export const SingleDocumentPermissionRejectedSchema: any = withTypeBlueId(
  blueIds['MyOS/Single Document Permission Rejected']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    permissions: zod.lazy(() => SingleDocumentPermissionSetSchema).optional(),
    reason: zod.string().optional(),
    targetSessionId: zod.string().optional(),
  })
);

export type SingleDocumentPermissionRejected = z.infer<
  typeof SingleDocumentPermissionRejectedSchema
>;
