import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnumSchema } from './CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnum';
import { CdmBaseStaticdataAssetCommonCommodityReferenceFrameworkSchema } from './CdmBaseStaticdataAssetCommonCommodityReferenceFramework';
import { CdmBaseStaticdataAssetCommonPriceSourceSchema } from './CdmBaseStaticdataAssetCommonPriceSource';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonCommodityProductDefinitionSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/CommodityProductDefinition'
    ]
  )(
    zod.object({
      commodityInfoPublisher: zod
        .lazy(
          () =>
            CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnumSchema
        )
        .optional(),
      description: zod.string().optional(),
      exchangeId: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      name: zod.string().optional(),
      priceSource: zod
        .lazy(() => CdmBaseStaticdataAssetCommonPriceSourceSchema)
        .optional(),
      referenceFramework: zod.lazy(
        () => CdmBaseStaticdataAssetCommonCommodityReferenceFrameworkSchema
      ),
    })
  );

export type CdmBaseStaticdataAssetCommonCommodityProductDefinition = z.infer<
  typeof CdmBaseStaticdataAssetCommonCommodityProductDefinitionSchema
>;
