import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ContractSchema } from './Contract';

export const MarkerSchema = withTypeBlueId(blueIds['Marker'])(
  ContractSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Marker = z.infer<typeof MarkerSchema>;
