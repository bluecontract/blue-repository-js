import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { DocumentSessionReferenceSchema } from '../../sessioninteraction/schemas/DocumentSessionReference';

const zod = z as any;

export const DocumentBootstrapCompletedSchema: any = withTypeBlueId(
  blueIds['Bootstrap/Document Bootstrap Completed']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    documentSession: zod.lazy(() => DocumentSessionReferenceSchema),
    name: zod.string().optional(),
  })
);

export type DocumentBootstrapCompleted = z.infer<
  typeof DocumentBootstrapCompletedSchema
>;
