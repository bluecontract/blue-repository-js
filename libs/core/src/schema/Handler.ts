import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { ContractSchema } from './Contract';
import { TextSchema } from './Text';

export const HandlerSchema = withTypeBlueId(blueIds['Handler'])(
  ContractSchema.extend({
    channel: TextSchema.optional(),
    description: z.string().optional(),
    event: blueNodeField().optional(),
    name: z.string().optional(),
  })
);

export type Handler = z.infer<typeof HandlerSchema>;
