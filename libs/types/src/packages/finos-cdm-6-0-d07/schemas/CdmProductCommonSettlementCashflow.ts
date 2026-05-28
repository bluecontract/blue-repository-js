import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDate';
import { CdmBaseMathNonNegativeQuantitySchema } from './CdmBaseMathNonNegativeQuantity';
import { CdmBaseStaticdataAssetCommonAssetSchema } from './CdmBaseStaticdataAssetCommonAsset';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmProductCommonSettlementCashflowTypeSchema } from './CdmProductCommonSettlementCashflowType';
import { CdmProductCommonSettlementPaymentDiscountingSchema } from './CdmProductCommonSettlementPaymentDiscounting';

export const CdmProductCommonSettlementCashflowSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/Cashflow']
  )(
    z.object({
      asset: z.lazy(() => CdmBaseStaticdataAssetCommonAssetSchema).optional(),
      cashflowType: z.lazy(() => CdmProductCommonSettlementCashflowTypeSchema),
      description: z.string().optional(),
      name: z.string().optional(),
      payerReceiver: z.lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema),
      paymentDiscounting: z
        .lazy(() => CdmProductCommonSettlementPaymentDiscountingSchema)
        .optional(),
      quantity: z.lazy(() => CdmBaseMathNonNegativeQuantitySchema).optional(),
      settlementDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementCashflow = z.infer<
  typeof CdmProductCommonSettlementCashflowSchema
>;
