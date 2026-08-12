import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const DocumentBootstrapInProgressSchema: any = withTypeBlueId(
  blueIds['Bootstrap/Document Bootstrap In Progress']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type DocumentBootstrapInProgress = z.infer<
  typeof DocumentBootstrapInProgressSchema
>;
