import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from './Response';

const zod = z as any;

export const DocumentBootstrapRespondedSchema: any = withTypeBlueId(
  blueIds['Coordination/Document Bootstrap Responded']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
    status: zod.string().optional(),
  })
);

export type DocumentBootstrapResponded = z.infer<
  typeof DocumentBootstrapRespondedSchema
>;
