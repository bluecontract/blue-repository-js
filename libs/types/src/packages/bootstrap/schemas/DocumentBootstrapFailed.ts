import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const DocumentBootstrapFailedSchema: any = withTypeBlueId(
  blueIds['Bootstrap/Document Bootstrap Failed']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    error: zod.string(),
    name: zod.string().optional(),
  })
);

export type DocumentBootstrapFailed = z.infer<
  typeof DocumentBootstrapFailedSchema
>;
