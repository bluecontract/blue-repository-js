import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import {
  AllEventsExternalContractSubscriptionSchema,
  ExpectEventStepSchema,
  ExternalContractSchema,
  TriggerEventStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';
import { ChessGameMoveMadeEventSchema } from './ChessGameMoveMadeEvent';

export const ProcessedTaskSchema = withTypeBlueId(blueIds.ProcessedTask)(
  z.object({
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
