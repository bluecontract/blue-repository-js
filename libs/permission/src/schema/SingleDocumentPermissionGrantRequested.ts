import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionGrantRequestedSchema = withTypeBlueId(
  blueIds['Single Document Permission Grant Requested']
)(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    onBehalfOf: z.string().optional(),
    targetSessionId: z.string().optional(),
    permissions: SingleDocumentPermissionSetSchema.optional(),
  })
);

export type SingleDocumentPermissionGrantRequested = z.infer<
  typeof SingleDocumentPermissionGrantRequestedSchema
>;
