import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const SingleDocumentPermissionSetSchema = withTypeBlueId(
  blueIds['Single Document Permission Set']
)(
  z.object({
    allOps: z.boolean().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    read: z.boolean().optional(),
    share: z.boolean().optional(),
    singleOps: z.array(z.string()).optional(),
  })
);

export type SingleDocumentPermissionSet = z.infer<
  typeof SingleDocumentPermissionSetSchema
>;
