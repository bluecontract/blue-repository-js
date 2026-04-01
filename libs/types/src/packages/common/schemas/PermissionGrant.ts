import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSchema } from './Document';

export const PermissionGrantSchema = withTypeBlueId(
  blueIds['Common/PermissionGrant']
)(
  DocumentSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type PermissionGrant = z.infer<typeof PermissionGrantSchema>;
