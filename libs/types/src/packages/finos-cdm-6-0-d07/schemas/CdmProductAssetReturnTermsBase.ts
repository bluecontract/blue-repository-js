import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetDividendApplicabilitySchema } from './CdmObservableAssetDividendApplicability';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';
import { CdmProductAssetEquityUnderlierProvisionsSchema } from './CdmProductAssetEquityUnderlierProvisions';
import { CdmProductAssetValuationTermsSchema } from './CdmProductAssetValuationTerms';

const zod = z as any;

export const CdmProductAssetReturnTermsBaseSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ReturnTermsBase']
)(
  zod.object({
    annualizationFactor: zod.number().optional(),
    description: zod.string().optional(),
    dividendApplicability: zod
      .lazy(() => CdmObservableAssetDividendApplicabilitySchema)
      .optional(),
    equityUnderlierProvisions: zod
      .lazy(() => CdmProductAssetEquityUnderlierProvisionsSchema)
      .optional(),
    expectedN: zod.number(),
    initialLevel: zod.number().optional(),
    initialLevelSource: zod
      .lazy(() => CdmObservableCommonDeterminationMethodEnumSchema)
      .optional(),
    meanAdjustment: zod.boolean().optional(),
    name: zod.string().optional(),
    performance: zod.string().optional(),
    sharePriceDividendAdjustment: zod.boolean().optional(),
    valuationTerms: zod.lazy(() => CdmProductAssetValuationTermsSchema),
  })
);

export type CdmProductAssetReturnTermsBase = z.infer<
  typeof CdmProductAssetReturnTermsBaseSchema
>;
