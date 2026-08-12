import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const DocumentStatusSchema: any = withTypeBlueId(
  blueIds['Coordination/Document Status']
)(
  zod.object({
    description: zod.string().optional(),
    mode: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type DocumentStatus = z.infer<typeof DocumentStatusSchema>;
