import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/core-dev';

export const PayNoteCancellationRequestedSchema = withTypeBlueId(
  blueIds['PayNote Cancellation Requested']
)(
  RequestSchema.extend({
    childPayNote: blueNodeField().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type PayNoteCancellationRequested = z.infer<
  typeof PayNoteCancellationRequestedSchema
>;
