import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmObservableAssetTransactedPriceSchema } from './CdmObservableAssetTransactedPrice';
import { CdmProductAssetGeneralTermsSchema } from './CdmProductAssetGeneralTerms';
import { CdmProductAssetProtectionTermsSchema } from './CdmProductAssetProtectionTerms';
import { CdmProductCommonSettlementPrincipalPaymentsSchema } from './CdmProductCommonSettlementPrincipalPayments';
import { CdmProductCommonSettlementResolvablePriceQuantitySchema } from './CdmProductCommonSettlementResolvablePriceQuantity';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';

const zod = z as any;

export const CdmProductAssetCreditDefaultPayoutSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/CreditDefaultPayout']
)(
  zod.object({
    description: zod.string().optional(),
    generalTerms: zod.lazy(() => CdmProductAssetGeneralTermsSchema),
    name: zod.string().optional(),
    payerReceiver: zod
      .lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema)
      .optional(),
    priceQuantity: zod
      .lazy(() => CdmProductCommonSettlementResolvablePriceQuantitySchema)
      .optional(),
    principalPayment: zod
      .lazy(() => CdmProductCommonSettlementPrincipalPaymentsSchema)
      .optional(),
    protectionTerms: zod
      .array(zod.lazy(() => CdmProductAssetProtectionTermsSchema))
      .min(0)
      .optional(),
    settlementTerms: zod
      .lazy(() => CdmProductCommonSettlementSettlementTermsSchema)
      .optional(),
    transactedPrice: zod
      .lazy(() => CdmObservableAssetTransactedPriceSchema)
      .optional(),
  })
);

export type CdmProductAssetCreditDefaultPayout = z.infer<
  typeof CdmProductAssetCreditDefaultPayoutSchema
>;
