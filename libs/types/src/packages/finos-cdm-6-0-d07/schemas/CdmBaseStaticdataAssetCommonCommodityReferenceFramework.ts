import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathCapacityUnitEnumSchema } from './CdmBaseMathCapacityUnitEnum';
import { CdmBaseMathWeatherUnitEnumSchema } from './CdmBaseMathWeatherUnitEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataAssetCommonCommodityReferenceFrameworkSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/CommodityReferenceFramework'
    ]
  )(
    z.object({
      capacityUnit: z.lazy(() => CdmBaseMathCapacityUnitEnumSchema).optional(),
      commodityName: z.string(),
      currency: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      description: z.string().optional(),
      name: z.string().optional(),
      weatherUnit: z.lazy(() => CdmBaseMathWeatherUnitEnumSchema).optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonCommodityReferenceFramework = z.infer<
  typeof CdmBaseStaticdataAssetCommonCommodityReferenceFrameworkSchema
>;
