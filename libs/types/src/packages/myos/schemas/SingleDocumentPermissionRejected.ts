import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionRejectedSchema = withTypeBlueId(
  blueIds['MyOS/Single Document Permission Rejected']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    permissions: z.lazy(() => SingleDocumentPermissionSetSchema).optional(),
    reason: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SingleDocumentPermissionRejected = z.infer<
  typeof SingleDocumentPermissionRejectedSchema
>;
