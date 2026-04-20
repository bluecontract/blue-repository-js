import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SourceSchema } from './Source';

export const APICallSchema = withTypeBlueId(blueIds['Conversation/API Call'])(
  SourceSchema.extend({
    apiKeyId: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type APICall = z.infer<typeof APICallSchema>;
