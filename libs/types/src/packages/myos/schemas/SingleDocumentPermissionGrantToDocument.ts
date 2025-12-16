import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionGrantToDocumentSchema = withTypeBlueId(blueIds['MyOS/Single Document Permission Grant To Document'])(
  MyOSAdminBaseSchema.extend({
    "targetSessionId": z.string().optional(),
    "granteeDocumentId": z.string().optional(),
    "granterDocumentSessionId": z.string().optional(),
    "permissions": SingleDocumentPermissionSetSchema.optional(),
    "skipValidation": z.boolean().optional()
  })
);

export type SingleDocumentPermissionGrantToDocument = z.infer<typeof SingleDocumentPermissionGrantToDocumentSchema>;
