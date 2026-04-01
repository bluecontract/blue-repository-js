import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSchema } from './Document';

export const ProfileSchema = withTypeBlueId(blueIds['Common/Profile'])(
  DocumentSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Profile = z.infer<typeof ProfileSchema>;
