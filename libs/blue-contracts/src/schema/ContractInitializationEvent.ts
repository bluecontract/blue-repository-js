import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

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
