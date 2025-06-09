import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MainChatMessageSchema = withTypeBlueId(
  blueIds['Main Chat Message']
)(
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
