import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionGrantingInProgressSchema = withTypeBlueId(
  blueIds['Single Document Permission Granting in Progress']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    note: z.unknown().optional(),
    permissions: SingleDocumentPermissionSetSchema.optional(),
    targetSessionId: z.unknown().optional(),
  })
);

export type SingleDocumentPermissionGrantingInProgress = z.infer<
  typeof SingleDocumentPermissionGrantingInProgressSchema
>;
