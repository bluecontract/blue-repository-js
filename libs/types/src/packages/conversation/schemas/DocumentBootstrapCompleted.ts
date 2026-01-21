import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from './Response';

export const DocumentBootstrapCompletedSchema = withTypeBlueId(
  blueIds['Conversation/Document Bootstrap Completed']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    documentId: z.string().optional(),
    name: z.string().optional(),
  })
);

export type DocumentBootstrapCompleted = z.infer<
  typeof DocumentBootstrapCompletedSchema
>;
