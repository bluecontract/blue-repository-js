import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDate';
import { CdmBaseMathNonNegativeQuantitySchema } from './CdmBaseMathNonNegativeQuantity';
import { CdmBaseStaticdataAssetCommonAssetSchema } from './CdmBaseStaticdataAssetCommonAsset';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmProductCommonSettlementCashflowTypeSchema } from './CdmProductCommonSettlementCashflowType';
import { CdmProductCommonSettlementPaymentDiscountingSchema } from './CdmProductCommonSettlementPaymentDiscounting';

const zod = z as any;

export const CdmProductCommonSettlementCashflowSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/Cashflow']
)(
  zod.object({
    asset: zod.lazy(() => CdmBaseStaticdataAssetCommonAssetSchema).optional(),
    cashflowType: zod.lazy(() => CdmProductCommonSettlementCashflowTypeSchema),
    description: zod.string().optional(),
    name: zod.string().optional(),
    payerReceiver: zod.lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema),
    paymentDiscounting: zod
      .lazy(() => CdmProductCommonSettlementPaymentDiscountingSchema)
      .optional(),
    quantity: zod.lazy(() => CdmBaseMathNonNegativeQuantitySchema).optional(),
    settlementDate: zod
      .lazy(() => CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema)
      .optional(),
  })
);

export type CdmProductCommonSettlementCashflow = z.infer<
  typeof CdmProductCommonSettlementCashflowSchema
>;
