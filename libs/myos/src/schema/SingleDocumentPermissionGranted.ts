import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/conversation';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionGrantedSchema = withTypeBlueId(
  blueIds['Single Document Permission Granted']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    permissions: SingleDocumentPermissionSetSchema.optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SingleDocumentPermissionGranted = z.infer<
  typeof SingleDocumentPermissionGrantedSchema
>;
