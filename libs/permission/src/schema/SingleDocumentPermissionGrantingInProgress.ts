import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionGrantingInProgressSchema = withTypeBlueId(
  blueIds['Single Document Permission Granting in Progress']
)(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    note: z.string().optional(),
    targetSessionId: z.string().optional(),
    permissions: SingleDocumentPermissionSetSchema.optional(),
  })
);

export type SingleDocumentPermissionGrantingInProgress = z.infer<
  typeof SingleDocumentPermissionGrantingInProgressSchema
>;
