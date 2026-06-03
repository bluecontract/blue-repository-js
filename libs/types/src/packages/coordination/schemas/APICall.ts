import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SourceSchema } from './Source';

const zod = z as any;

export const APICallSchema: any = withTypeBlueId(
  blueIds['Coordination/API Call']
)(
  SourceSchema.extend({
    apiKeyId: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type APICall = z.infer<typeof APICallSchema>;
