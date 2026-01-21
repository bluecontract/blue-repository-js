import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from './Response';

export const DocumentBootstrapFailedSchema = withTypeBlueId(
  blueIds['Conversation/Document Bootstrap Failed']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type DocumentBootstrapFailed = z.infer<
  typeof DocumentBootstrapFailedSchema
>;
