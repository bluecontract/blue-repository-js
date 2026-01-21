import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MarkerSchema } from '../../core/schemas/Marker';

export const ContractsChangePolicySchema = withTypeBlueId(
  blueIds['Conversation/Contracts Change Policy']
)(
  MarkerSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    requireSectionChanges: z.boolean().optional(),
  })
);

export type ContractsChangePolicy = z.infer<typeof ContractsChangePolicySchema>;
