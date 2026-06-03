import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from './Response';

const zod = z as any;

export const DocumentBootstrapCompletedSchema: any = withTypeBlueId(
  blueIds['Coordination/Document Bootstrap Completed']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    documentId: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type DocumentBootstrapCompleted = z.infer<
  typeof DocumentBootstrapCompletedSchema
>;
