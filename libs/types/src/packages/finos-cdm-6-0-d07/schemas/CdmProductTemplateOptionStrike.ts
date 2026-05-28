import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmObservableAssetReferenceSwapCurveSchema } from './CdmObservableAssetReferenceSwapCurve';
import { CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecificationSchema } from './CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecification';
import { CdmProductTemplateAveragingStrikeFeatureSchema } from './CdmProductTemplateAveragingStrikeFeature';

export const CdmProductTemplateOptionStrikeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/OptionStrike']
  )(
    z.object({
      averagingStrikeFeature: z
        .lazy(() => CdmProductTemplateAveragingStrikeFeatureSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      referenceSwapCurve: z
        .lazy(() => CdmObservableAssetReferenceSwapCurveSchema)
        .optional(),
      strikePrice: z.lazy(() => CdmObservableAssetPriceSchema).optional(),
      strikeReference: z
        .lazy(
          () =>
            CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecificationSchema
        )
        .optional(),
    })
  );

export type CdmProductTemplateOptionStrike = z.infer<
  typeof CdmProductTemplateOptionStrikeSchema
>;
