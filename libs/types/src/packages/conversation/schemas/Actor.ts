import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const ActorSchema = withTypeBlueId(blueIds['Conversation/Actor'])(
  z.object({})
);

export type Actor = z.infer<typeof ActorSchema>;
