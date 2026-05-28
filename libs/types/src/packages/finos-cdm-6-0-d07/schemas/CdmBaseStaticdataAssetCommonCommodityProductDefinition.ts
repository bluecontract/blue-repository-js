import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnumSchema } from './CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnum';
import { CdmBaseStaticdataAssetCommonCommodityReferenceFrameworkSchema } from './CdmBaseStaticdataAssetCommonCommodityReferenceFramework';
import { CdmBaseStaticdataAssetCommonPriceSourceSchema } from './CdmBaseStaticdataAssetCommonPriceSource';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataAssetCommonCommodityProductDefinitionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/CommodityProductDefinition'
    ]
  )(
    z.object({
      commodityInfoPublisher: z
        .lazy(
          () =>
            CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnumSchema
        )
        .optional(),
      description: z.string().optional(),
      exchangeId: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      name: z.string().optional(),
      priceSource: z
        .lazy(() => CdmBaseStaticdataAssetCommonPriceSourceSchema)
        .optional(),
      referenceFramework: z.lazy(
        () => CdmBaseStaticdataAssetCommonCommodityReferenceFrameworkSchema
      ),
    })
  );

export type CdmBaseStaticdataAssetCommonCommodityProductDefinition = z.infer<
  typeof CdmBaseStaticdataAssetCommonCommodityProductDefinitionSchema
>;
