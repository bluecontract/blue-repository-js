import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionGrantedSchema = withTypeBlueId(
  blueIds['Single Document Permission Granted']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    permissions: SingleDocumentPermissionSetSchema.optional(),
    targetSessionId: z.unknown().optional(),
  })
);

export type SingleDocumentPermissionGranted = z.infer<
  typeof SingleDocumentPermissionGrantedSchema
>;
