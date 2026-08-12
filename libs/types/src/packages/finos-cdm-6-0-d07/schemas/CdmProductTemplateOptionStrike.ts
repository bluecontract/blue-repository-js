import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmObservableAssetReferenceSwapCurveSchema } from './CdmObservableAssetReferenceSwapCurve';
import { CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecificationSchema } from './CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecification';
import { CdmProductTemplateAveragingStrikeFeatureSchema } from './CdmProductTemplateAveragingStrikeFeature';

const zod = z as any;

export const CdmProductTemplateOptionStrikeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/OptionStrike']
)(
  zod.object({
    averagingStrikeFeature: zod
      .lazy(() => CdmProductTemplateAveragingStrikeFeatureSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    referenceSwapCurve: zod
      .lazy(() => CdmObservableAssetReferenceSwapCurveSchema)
      .optional(),
    strikePrice: zod.lazy(() => CdmObservableAssetPriceSchema).optional(),
    strikeReference: zod
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
