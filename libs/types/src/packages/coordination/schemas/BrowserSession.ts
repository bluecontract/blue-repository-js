import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SourceSchema } from './Source';

const zod = z as any;

export const BrowserSessionSchema: any = withTypeBlueId(
  blueIds['Coordination/Browser Session']
)(
  SourceSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    uiSessionNonce: zod.string().optional(),
  })
);

export type BrowserSession = z.infer<typeof BrowserSessionSchema>;
