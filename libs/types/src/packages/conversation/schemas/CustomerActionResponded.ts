import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { ResponseSchema } from './Response';

export const CustomerActionRespondedSchema = withTypeBlueId(
  blueIds['Conversation/Customer Action Responded']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    input: blueNodeField().optional(),
    mode: z.string().optional(),
    name: z.string().optional(),
    respondedAt: TimestampSchema.optional(),
  })
);

export type CustomerActionResponded = z.infer<
  typeof CustomerActionRespondedSchema
>;
