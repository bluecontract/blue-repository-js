import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const FinalAmountResolutionRejectedSchema = withTypeBlueId(
  blueIds['PayNote/Final Amount Resolution Rejected']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type FinalAmountResolutionRejected = z.infer<
  typeof FinalAmountResolutionRejectedSchema
>;
