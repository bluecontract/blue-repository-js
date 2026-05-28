import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonSettlementPercentageRuleSchema } from './CdmProductCommonSettlementPercentageRule';

export const CdmProductCommonSettlementPaymentRuleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/PaymentRule']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      percentageRule: z
        .lazy(() => CdmProductCommonSettlementPercentageRuleSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementPaymentRule = z.infer<
  typeof CdmProductCommonSettlementPaymentRuleSchema
>;
