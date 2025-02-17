import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const ContractUpdateEventSchema = withTypeBlueId(
  blueIds.ContractUpdateEvent
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    changeset: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
  })
);

export type ContractUpdateEvent = z.infer<typeof ContractUpdateEventSchema>;
