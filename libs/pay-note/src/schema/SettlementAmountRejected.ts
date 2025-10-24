import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const SettlementAmountRejectedSchema = withTypeBlueId(
  blueIds['Settlement Amount Rejected']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.unknown().optional(),
  })
);

export type SettlementAmountRejected = z.infer<
  typeof SettlementAmountRejectedSchema
>;
