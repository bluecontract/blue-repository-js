import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const AuthoritySchema: any = withTypeBlueId(
  blueIds['Coordination/Authority']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type Authority = z.infer<typeof AuthoritySchema>;
