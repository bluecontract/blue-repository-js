import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const SingleDocumentPermissionSetSchema = withTypeBlueId(blueIds['MyOS/Single Document Permission Set'])(
  z.object({
    "read": z.boolean().optional(),
    "allOps": z.boolean().optional(),
    "share": z.boolean().optional(),
    "singleOps": z.array(z.string()).optional()
  })
);

export type SingleDocumentPermissionSet = z.infer<typeof SingleDocumentPermissionSetSchema>;
