import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const MainChatMessageSchema = withTypeBlueId(blueIds.MainChatMessage)(
  z.object({
    name: z.string().optional(),
    userInputDetails: z.string().optional(),
    userInput: z.string().optional(),
    messageType: z.string().optional(),
    message: z.string().optional(),
    responseTo: z.string().optional(),
  })
);

export type MainChatMessage = z.infer<typeof MainChatMessageSchema>;
