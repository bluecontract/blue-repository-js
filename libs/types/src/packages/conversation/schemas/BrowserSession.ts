import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SourceSchema } from './Source';

export const BrowserSessionSchema = withTypeBlueId(
  blueIds['Conversation/Browser Session']
)(
  SourceSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    uiSessionNonce: z.string().optional(),
  })
);

export type BrowserSession = z.infer<typeof BrowserSessionSchema>;
