import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import {
  AllEventsExternalContractSubscriptionSchema,
  ContractSchema,
  ExpectEventStepSchema,
  ExternalContractSchema,
  TriggerEventStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';
import { ChessGameMoveMadeEventSchema } from './ChessGameMoveMadeEvent';

export const ProcessedTaskSchema = withTypeBlueId(blueIds['Processed Task'])(
  ContractSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    subscriptions: z
      .tuple([AllEventsExternalContractSubscriptionSchema])
      .optional(),
    workflows: z
      .tuple([
        z.object({
          name: z.string().optional(),
          steps: z
            .tuple([
              ExpectEventStepSchema,
              UpdateStepSchema,
              TriggerEventStepSchema,
            ])
            .optional(),
          trigger: z
            .object({
              event: ChessGameMoveMadeEventSchema.optional(),
              contract: ExternalContractSchema.optional(),
            })
            .optional(),
        }),
      ])
      .optional(),
    properties: z
      .object({
        comments: z.array(z.string()).optional(),
      })
      .optional(),
  })
);

export type ProcessedTask = z.infer<typeof ProcessedTaskSchema>;
