import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const UserMessageSchema = withTypeBlueId(blueIds.UserMessage)(
  z.object({
    name: z.string().optional(),
    relevantContractTypes: z.array(z.string()).optional(),
    relevantAssistantTypes: z.array(z.string()).optional(),
    message: z.string().optional(),
    contracts: z.record(z.string(), z.string()).optional(),
    generateResponse: z.boolean().optional(),
  })
);

export type UserMessage = z.infer<typeof UserMessageSchema>;
