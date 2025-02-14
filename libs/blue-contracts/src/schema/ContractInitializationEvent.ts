import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const ContractInitializationEventSchema = withTypeBlueId(
  blueIds.ContractInitializationEvent
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type ContractInitializationEvent = z.infer<
  typeof ContractInitializationEventSchema
>;
