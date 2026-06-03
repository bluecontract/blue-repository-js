import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathCapacityUnitEnumSchema } from './CdmBaseMathCapacityUnitEnum';
import { CdmBaseMathWeatherUnitEnumSchema } from './CdmBaseMathWeatherUnitEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonCommodityReferenceFrameworkSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/CommodityReferenceFramework'
    ]
  )(
    zod.object({
      capacityUnit: zod
        .lazy(() => CdmBaseMathCapacityUnitEnumSchema)
        .optional(),
      commodityName: zod.string(),
      currency: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      description: zod.string().optional(),
      name: zod.string().optional(),
      weatherUnit: zod.lazy(() => CdmBaseMathWeatherUnitEnumSchema).optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonCommodityReferenceFramework = z.infer<
  typeof CdmBaseStaticdataAssetCommonCommodityReferenceFrameworkSchema
>;
