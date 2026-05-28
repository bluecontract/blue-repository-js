import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnum';
import { CdmProductAssetInterestShortfallCapEnumSchema } from './CdmProductAssetInterestShortfallCapEnum';

export const CdmProductAssetInterestShortFallSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/InterestShortFall']
  )(
    z.object({
      compounding: z.boolean(),
      description: z.string().optional(),
      interestShortfallCap: z.lazy(
        () => CdmProductAssetInterestShortfallCapEnumSchema
      ),
      name: z.string().optional(),
      rateSource: z
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
