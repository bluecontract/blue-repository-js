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

const zod = z as any;

export const CdmProductTemplateAssetPayoutSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/AssetPayout']
)(
  zod.object({
    assetLeg: zod
      .array(zod.lazy(() => CdmProductTemplateAssetLegSchema))
      .min(1)
      .optional(),
    description: zod.string().optional(),
    dividendTerms: zod
      .lazy(() => CdmProductTemplateDividendTermsSchema)
      .optional(),
    minimumFee: zod.lazy(() => CdmObservableAssetMoneySchema).optional(),
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
    settlementTerms: zod
      .lazy(() => CdmProductCommonSettlementSettlementTermsSchema)
      .optional(),
    tradeType: zod
      .lazy(() => CdmProductTemplateAssetPayoutTradeTypeEnumSchema)
      .optional(),
    underlier: zod.lazy(() => CdmBaseStaticdataAssetCommonAssetSchema),
  })
);

export type CdmProductTemplateAssetPayout = z.infer<
  typeof CdmProductTemplateAssetPayoutSchema
>;
