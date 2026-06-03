import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonSettlementPercentageRuleSchema } from './CdmProductCommonSettlementPercentageRule';

const zod = z as any;

export const CdmProductCommonSettlementPaymentRuleSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/PaymentRule']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    percentageRule: zod
      .lazy(() => CdmProductCommonSettlementPercentageRuleSchema)
      .optional(),
  })
);

export type CdmProductCommonSettlementPaymentRule = z.infer<
  typeof CdmProductCommonSettlementPaymentRuleSchema
>;
