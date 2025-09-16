import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const SingleDocumentPermissionSetSchema = withTypeBlueId(
  blueIds['Single Document Permission Set']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    singleOps: z.array(z.string()).optional(),
    share: z.boolean().optional(),
    read: z.boolean().optional(),
    allOps: z.boolean().optional(),
  })
);

export type SingleDocumentPermissionSet = z.infer<
  typeof SingleDocumentPermissionSetSchema
>;
