import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import {
  ContractInitializationEventSchema,
  ContractSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';
import { TicketSchema } from './Ticket';

export const MyContractSchema = withTypeBlueId(blueIds.MyContract)(
  ContractSchema.extend({
    name: z.string().optional(),
    properties: z
      .object({
        ticket: TicketSchema.optional(),
        x: z.number().optional(),
      })
      .optional(),
    workflows: z
      .tuple([
        z.object({
          steps: z.tuple([UpdateStepSchema]).optional(),
          trigger: z
            .object({
              event: ContractInitializationEventSchema.optional(),
            })
            .optional(),
        }),
      ])
      .optional(),
  })
);

export type MyContract = z.infer<typeof MyContractSchema>;
