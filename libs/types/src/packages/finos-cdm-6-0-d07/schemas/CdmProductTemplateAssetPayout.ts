import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetSchema } from './CdmBaseStaticdataAssetCommonAsset';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductCommonSettlementPrincipalPaymentsSchema } from './CdmProductCommonSettlementPrincipalPayments';
import { CdmProductCommonSettlementResolvablePriceQuantitySchema } from './CdmProductCommonSettlementResolvablePriceQuantity';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';
import { CdmProductTemplateAssetLegSchema } from './CdmProductTemplateAssetLeg';
import { CdmProductTemplateAssetPayoutTradeTypeEnumSchema } from './CdmProductTemplateAssetPayoutTradeTypeEnum';
import { CdmProductTemplateDividendTermsSchema } from './CdmProductTemplateDividendTerms';

export const CdmProductTemplateAssetPayoutSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/AssetPayout']
)(
  z.object({
    assetLeg: z
      .array(z.lazy(() => CdmProductTemplateAssetLegSchema))
      .min(1)
      .optional(),
    description: z.string().optional(),
    dividendTerms: z
      .lazy(() => CdmProductTemplateDividendTermsSchema)
      .optional(),
    minimumFee: z.lazy(() => CdmObservableAssetMoneySchema).optional(),
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
    settlementTerms: z
      .lazy(() => CdmProductCommonSettlementSettlementTermsSchema)
      .optional(),
    tradeType: z
      .lazy(() => CdmProductTemplateAssetPayoutTradeTypeEnumSchema)
      .optional(),
    underlier: z.lazy(() => CdmBaseStaticdataAssetCommonAssetSchema),
  })
);

export type CdmProductTemplateAssetPayout = z.infer<
  typeof CdmProductTemplateAssetPayoutSchema
>;
