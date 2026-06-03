import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { ResponseSchema } from './Response';

const zod = z as any;

export const CustomerActionRespondedSchema: any = withTypeBlueId(
  blueIds['Coordination/Customer Action Responded']
)(
  ResponseSchema.extend({
    actionLabel: zod.string().optional(),
    description: zod.string().optional(),
    input: blueNodeField().optional(),
    name: zod.string().optional(),
    respondedAt: zod.lazy(() => TimestampSchema).optional(),
  })
);

export type CustomerActionResponded = z.infer<
  typeof CustomerActionRespondedSchema
>;
