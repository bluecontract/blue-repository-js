import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionGrantToAccountSchema = withTypeBlueId(blueIds['MyOS/Single Document Permission Grant To Account'])(
  MyOSAdminBaseSchema.extend({
    "targetSessionId": z.string().optional(),
    "granterDocumentSessionId": z.string().optional(),
    "permissions": SingleDocumentPermissionSetSchema.optional()
  })
);

export type SingleDocumentPermissionGrantToAccount = z.infer<typeof SingleDocumentPermissionGrantToAccountSchema>;
