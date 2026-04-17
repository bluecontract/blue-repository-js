import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const FinalAmountResolutionRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Final Amount Resolution Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    finalAmount: z.number().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type FinalAmountResolutionRequested = z.infer<
  typeof FinalAmountResolutionRequestedSchema
>;
