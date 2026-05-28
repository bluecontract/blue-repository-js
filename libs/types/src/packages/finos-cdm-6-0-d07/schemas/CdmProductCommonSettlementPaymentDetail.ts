import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductCommonSettlementPaymentRuleSchema } from './CdmProductCommonSettlementPaymentRule';

export const CdmProductCommonSettlementPaymentDetailSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/PaymentDetail']
  )(
    z.object({
      name: z.string().optional(),
      paymentAmount: z.lazy(() => CdmObservableAssetMoneySchema).optional(),
      paymentDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      paymentRule: z.lazy(() => CdmProductCommonSettlementPaymentRuleSchema),
    })
  );

export type CdmProductCommonSettlementPaymentDetail = z.infer<
  typeof CdmProductCommonSettlementPaymentDetailSchema
>;
