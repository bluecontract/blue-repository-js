import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const SettlementAmountRejectedSchema = withTypeBlueId(
  blueIds['Settlement Amount Rejected']
)(
  ResponseSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type SettlementAmountRejected = z.infer<
  typeof SettlementAmountRejectedSchema
>;
