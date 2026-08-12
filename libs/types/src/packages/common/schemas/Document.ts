import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const DocumentSchema: any = withTypeBlueId(blueIds['Common/Document'])(
  zod.object({
    description: zod.string().optional(),
    kind: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type Document = z.infer<typeof DocumentSchema>;
