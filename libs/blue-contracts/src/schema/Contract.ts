import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { ContractSubscriptionSchema } from './ContractSubscription';
import { WorkflowSchema } from './Workflow';
import { ParticipantSchema } from './Participant';

export const ContractSchema = withTypeBlueId(blueIds.Contract)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    subscriptions: z.array(ContractSubscriptionSchema).optional(),
    workflows: z.array(WorkflowSchema).optional(),
    properties: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    messaging: z
      .object({
        secureChannel: z
          .object({
            description: z.string().optional(),
          })
          .optional(),
        participants: z.record(z.string(), ParticipantSchema).optional(),
      })
      .optional(),
  })
);

export type Contract = z.infer<typeof ContractSchema>;
