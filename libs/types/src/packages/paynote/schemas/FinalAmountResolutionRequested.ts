import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const FinalAmountResolutionRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/Final Amount Resolution Requested']
)(
  RequestSchema.extend({
    description: zod.string().optional(),
    finalAmount: zod.number().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type FinalAmountResolutionRequested = z.infer<
  typeof FinalAmountResolutionRequestedSchema
>;
