import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductCommonSettlementPaymentRuleSchema } from './CdmProductCommonSettlementPaymentRule';

const zod = z as any;

export const CdmProductCommonSettlementPaymentDetailSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/PaymentDetail']
  )(
    zod.object({
      name: zod.string().optional(),
      paymentAmount: zod.lazy(() => CdmObservableAssetMoneySchema).optional(),
      paymentDate: zod
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      paymentRule: zod.lazy(() => CdmProductCommonSettlementPaymentRuleSchema),
    })
  );

export type CdmProductCommonSettlementPaymentDetail = z.infer<
  typeof CdmProductCommonSettlementPaymentDetailSchema
>;
