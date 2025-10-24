import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const SingleDocumentPermissionSetSchema = withTypeBlueId(
  blueIds['Single Document Permission Set']
)(
  z.object({
    allOps: z.unknown().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    read: z.unknown().optional(),
    share: z.unknown().optional(),
    singleOps: z.unknown().optional(),
  })
);

export type SingleDocumentPermissionSet = z.infer<
  typeof SingleDocumentPermissionSetSchema
>;
