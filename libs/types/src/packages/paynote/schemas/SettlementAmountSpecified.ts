import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const SettlementAmountSpecifiedSchema: any = withTypeBlueId(
  blueIds['PayNote/Settlement Amount Specified']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    finalAmount: zod.number().optional(),
    name: zod.string().optional(),
  })
);

export type SettlementAmountSpecified = z.infer<
  typeof SettlementAmountSpecifiedSchema
>;
