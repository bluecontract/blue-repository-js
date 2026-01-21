import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from './Response';

export const DocumentBootstrapRespondedSchema = withTypeBlueId(
  blueIds['Conversation/Document Bootstrap Responded']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    status: z.string().optional(),
  })
);

export type DocumentBootstrapResponded = z.infer<
  typeof DocumentBootstrapRespondedSchema
>;
