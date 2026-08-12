import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const SourceSchema: any = withTypeBlueId(blueIds['Coordination/Source'])(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type Source = z.infer<typeof SourceSchema>;
