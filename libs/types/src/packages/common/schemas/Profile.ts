import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSchema } from './Document';

const zod = z as any;

export const ProfileSchema: any = withTypeBlueId(blueIds['Common/Profile'])(
  DocumentSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type Profile = z.infer<typeof ProfileSchema>;
