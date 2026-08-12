import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonCommodityProductDefinitionSchema } from './CdmBaseStaticdataAssetCommonCommodityProductDefinition';
import { CdmBaseStaticdataAssetCommonDeliveryDateParametersSchema } from './CdmBaseStaticdataAssetCommonDeliveryDateParameters';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmObservableAssetQuotationSideEnumSchema } from './CdmObservableAssetQuotationSideEnum';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonCommoditySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/Commodity']
)(
  zod.object({
    commodityProductDefinition: zod
      .lazy(() => CdmBaseStaticdataAssetCommonCommodityProductDefinitionSchema)
      .optional(),
    deliveryDateReference: zod
      .lazy(() => CdmBaseStaticdataAssetCommonDeliveryDateParametersSchema)
      .optional(),
    description: zod.string().optional(),
    exchange: zod
      .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
      .optional(),
    identifier: zod
      .array(zod.lazy(() => CdmBaseStaticdataAssetCommonAssetIdentifierSchema))
      .min(1)
      .optional(),
    isExchangeListed: zod.boolean().optional(),
    name: zod.string().optional(),
    priceQuoteType: zod.lazy(() => CdmObservableAssetQuotationSideEnumSchema),
    relatedExchange: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema))
      .min(0)
      .optional(),
    taxonomy: zod
      .array(zod.lazy(() => CdmBaseStaticdataAssetCommonTaxonomySchema))
      .min(0)
      .optional(),
  })
);

export type CdmBaseStaticdataAssetCommonCommodity = z.infer<
  typeof CdmBaseStaticdataAssetCommonCommoditySchema
>;
