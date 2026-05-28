import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonCommodityProductDefinitionSchema } from './CdmBaseStaticdataAssetCommonCommodityProductDefinition';
import { CdmBaseStaticdataAssetCommonDeliveryDateParametersSchema } from './CdmBaseStaticdataAssetCommonDeliveryDateParameters';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmObservableAssetQuotationSideEnumSchema } from './CdmObservableAssetQuotationSideEnum';

export const CdmBaseStaticdataAssetCommonCommoditySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/Commodity']
  )(
    z.object({
      commodityProductDefinition: z
        .lazy(
          () => CdmBaseStaticdataAssetCommonCommodityProductDefinitionSchema
        )
        .optional(),
      deliveryDateReference: z
        .lazy(() => CdmBaseStaticdataAssetCommonDeliveryDateParametersSchema)
        .optional(),
      description: z.string().optional(),
      exchange: z
        .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
        .optional(),
      identifier: z
        .array(z.lazy(() => CdmBaseStaticdataAssetCommonAssetIdentifierSchema))
        .min(1)
        .optional(),
      isExchangeListed: z.boolean().optional(),
      name: z.string().optional(),
      priceQuoteType: z.lazy(() => CdmObservableAssetQuotationSideEnumSchema),
      relatedExchange: z
        .array(z.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema))
        .min(0)
        .optional(),
      taxonomy: z
        .array(z.lazy(() => CdmBaseStaticdataAssetCommonTaxonomySchema))
        .min(0)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonCommodity = z.infer<
  typeof CdmBaseStaticdataAssetCommonCommoditySchema
>;
