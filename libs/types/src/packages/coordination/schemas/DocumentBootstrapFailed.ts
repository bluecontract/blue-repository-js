import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from './Response';

const zod = z as any;

export const DocumentBootstrapFailedSchema: any = withTypeBlueId(
  blueIds['Coordination/Document Bootstrap Failed']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type DocumentBootstrapFailed = z.infer<
  typeof DocumentBootstrapFailedSchema
>;
