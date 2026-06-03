import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnum';
import { CdmProductAssetInterestShortfallCapEnumSchema } from './CdmProductAssetInterestShortfallCapEnum';

const zod = z as any;

export const CdmProductAssetInterestShortFallSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/InterestShortFall']
)(
  zod.object({
    compounding: zod.boolean(),
    description: zod.string().optional(),
    interestShortfallCap: zod.lazy(
      () => CdmProductAssetInterestShortfallCapEnumSchema
    ),
    name: zod.string().optional(),
    rateSource: zod
      .lazy(
        () =>
          CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema
      )
      .optional(),
  })
);

export type CdmProductAssetInterestShortFall = z.infer<
  typeof CdmProductAssetInterestShortFallSchema
>;
