import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';
import {
  ContractSchema,
  ExpectEventStepSchema,
  InitializeLocalContractStepSchema,
  LocalContractSchema,
  LocalContractSubscriptionSchema,
  TimelineEntrySchema,
  TriggerEventStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';
import { ConversationEntrySchema } from './ConversationEntry';

export const TaskSchema = withTypeBlueId(blueIds['Task'])(
  ContractSchema.extend({
    name: z.string().optional(),
    subscriptions: z.tuple([LocalContractSubscriptionSchema]).optional(),
    workflows: z
      .tuple([
        z.object({
          name: z.string().optional(),
          steps: z
            .tuple([
              UpdateStepSchema,
              UpdateStepSchema,
              UpdateStepSchema,
              TriggerEventStepSchema,
              ExpectEventStepSchema,
              UpdateStepSchema,
              UpdateStepSchema,
              UpdateStepSchema,
            ])
            .optional(),
          trigger: z
            .object({
              name: z.string().optional(),
              event: TimelineEntrySchema.optional(),
            })
            .optional(),
        }),
        z.object({
          name: z.string().optional(),
          steps: z.tuple([UpdateStepSchema]).optional(),
          trigger: z
            .object({
              name: z.string().optional(),
              event: ConversationEntrySchema.optional(),
              contract: z.string().optional(),
            })
            .optional(),
        }),
        z.object({
          name: z.string().optional(),
          steps: z
            .tuple([InitializeLocalContractStepSchema, UpdateStepSchema])
            .optional(),
          trigger: z
            .object({
              event: TimelineEntrySchema.optional(),
            })
            .optional(),
        }),
        z.object({
          name: z.string().optional(),
          steps: z
            .tuple([UpdateStepSchema, UpdateStepSchema, UpdateStepSchema])
            .optional(),
          trigger: z
            .object({
              name: z.string().optional(),
              event: TimelineEntrySchema.optional(),
            })
            .optional(),
        }),
      ])
      .optional(),
    properties: z
      .object({
        actualTask: LocalContractSchema.optional(),
        conversation: z.array(z.unknown()).optional(),
      })
      .optional(),
    messaging: z
      .object({
        participants: z
          .object({
            Assistant: blueNodeField().optional(),
            User: blueNodeField().optional(),
          })
          .optional(),
      })
      .optional(),
  })
);

export type Task = z.infer<typeof TaskSchema>;
