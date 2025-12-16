import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ContractSchema } from './Contract';

export const MarkerSchema = withTypeBlueId(blueIds['Core/Marker'])(
  ContractSchema.extend({})
);

export type Marker = z.infer<typeof MarkerSchema>;
