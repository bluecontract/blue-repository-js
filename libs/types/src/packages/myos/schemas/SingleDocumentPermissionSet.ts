import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const SingleDocumentPermissionSetSchema: any = withTypeBlueId(
  blueIds['MyOS/Single Document Permission Set']
)(
  zod.object({
    allOps: zod.boolean().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    read: zod.boolean().optional(),
    share: zod.boolean().optional(),
    singleOps: zod.array(zod.string()).optional(),
  })
);

export type SingleDocumentPermissionSet = z.infer<
  typeof SingleDocumentPermissionSetSchema
>;
