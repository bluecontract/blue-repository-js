import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/conversation';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionGrantRespondedSchema = withTypeBlueId(
  blueIds['Single Document Permission Grant Responded']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    permissions: SingleDocumentPermissionSetSchema.optional(),
    reason: z.string().optional(),
    status: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SingleDocumentPermissionGrantResponded = z.infer<
  typeof SingleDocumentPermissionGrantRespondedSchema
>;
