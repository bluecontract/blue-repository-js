import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { ContractSchema } from './Contract';

export const HandlerSchema = withTypeBlueId(blueIds['Handler'])(
  ContractSchema.extend({
    channel: z.string().optional(),
    description: z.string().optional(),
    event: blueNodeField().optional(),
    name: z.string().optional(),
  })
);

export type Handler = z.infer<typeof HandlerSchema>;
