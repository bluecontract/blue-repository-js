import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionGrantRequestedSchema = withTypeBlueId(
  blueIds['MyOS/Single Document Permission Grant Requested']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    onBehalfOf: z.string().optional(),
    permissions: SingleDocumentPermissionSetSchema.optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SingleDocumentPermissionGrantRequested = z.infer<
  typeof SingleDocumentPermissionGrantRequestedSchema
>;
