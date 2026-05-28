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

export const CdmProductAssetCreditDefaultPayoutSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/CreditDefaultPayout']
  )(
    z.object({
      description: z.string().optional(),
      generalTerms: z.lazy(() => CdmProductAssetGeneralTermsSchema),
      name: z.string().optional(),
      payerReceiver: z
        .lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema)
        .optional(),
      priceQuantity: z
        .lazy(() => CdmProductCommonSettlementResolvablePriceQuantitySchema)
        .optional(),
      principalPayment: z
        .lazy(() => CdmProductCommonSettlementPrincipalPaymentsSchema)
        .optional(),
      protectionTerms: z
        .array(z.lazy(() => CdmProductAssetProtectionTermsSchema))
        .min(0)
        .optional(),
      settlementTerms: z
        .lazy(() => CdmProductCommonSettlementSettlementTermsSchema)
        .optional(),
      transactedPrice: z
        .lazy(() => CdmObservableAssetTransactedPriceSchema)
        .optional(),
    })
  );

export type CdmProductAssetCreditDefaultPayout = z.infer<
  typeof CdmProductAssetCreditDefaultPayoutSchema
>;
