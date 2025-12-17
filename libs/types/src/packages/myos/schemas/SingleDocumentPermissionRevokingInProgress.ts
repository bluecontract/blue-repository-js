import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionRevokingInProgressSchema = withTypeBlueId(
  blueIds['MyOS/Single Document Permission Revoking in Progress']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    note: z.string().optional(),
    permissions: SingleDocumentPermissionSetSchema.optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SingleDocumentPermissionRevokingInProgress = z.infer<
  typeof SingleDocumentPermissionRevokingInProgressSchema
>;
