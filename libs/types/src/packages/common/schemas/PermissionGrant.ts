import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSchema } from './Document';

const zod = z as any;

export const PermissionGrantSchema: any = withTypeBlueId(
  blueIds['Common/PermissionGrant']
)(
  DocumentSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type PermissionGrant = z.infer<typeof PermissionGrantSchema>;
