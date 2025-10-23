import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionRejectedSchema = withTypeBlueId(
  blueIds['Single Document Permission Rejected']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    permissions: SingleDocumentPermissionSetSchema.optional(),
    reason: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SingleDocumentPermissionRejected = z.infer<
  typeof SingleDocumentPermissionRejectedSchema
>;
