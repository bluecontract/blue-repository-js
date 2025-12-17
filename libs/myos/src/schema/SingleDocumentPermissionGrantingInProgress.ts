import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/conversation';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionGrantingInProgressSchema = withTypeBlueId(
  blueIds['Single Document Permission Granting in Progress']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    note: z.string().optional(),
    permissions: SingleDocumentPermissionSetSchema.optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SingleDocumentPermissionGrantingInProgress = z.infer<
  typeof SingleDocumentPermissionGrantingInProgressSchema
>;
