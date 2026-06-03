import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const FinalAmountResolutionRejectedSchema: any = withTypeBlueId(
  blueIds['PayNote/Final Amount Resolution Rejected']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type FinalAmountResolutionRejected = z.infer<
  typeof FinalAmountResolutionRejectedSchema
>;
