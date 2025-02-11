import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { TicketSchema } from './Ticket';
import {
  ContractInitializationEventSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';

export const MyContractSchema = withTypeBlueId(blueIds.MyContract)(
  z.object({
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
