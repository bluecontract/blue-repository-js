import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const PayNoteCancellationRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/PayNote Cancellation Requested']
)(
  RequestSchema.extend({
    childPayNote: blueNodeField().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type PayNoteCancellationRequested = z.infer<
  typeof PayNoteCancellationRequestedSchema
>;
