import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetDividendApplicabilitySchema } from './CdmObservableAssetDividendApplicability';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';
import { CdmProductAssetEquityUnderlierProvisionsSchema } from './CdmProductAssetEquityUnderlierProvisions';
import { CdmProductAssetValuationTermsSchema } from './CdmProductAssetValuationTerms';

export const CdmProductAssetReturnTermsBaseSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ReturnTermsBase']
  )(
    z.object({
      annualizationFactor: z.number().optional(),
      description: z.string().optional(),
      dividendApplicability: z
        .lazy(() => CdmObservableAssetDividendApplicabilitySchema)
        .optional(),
      equityUnderlierProvisions: z
        .lazy(() => CdmProductAssetEquityUnderlierProvisionsSchema)
        .optional(),
      expectedN: z.number(),
      initialLevel: z.number().optional(),
      initialLevelSource: z
        .lazy(() => CdmObservableCommonDeterminationMethodEnumSchema)
        .optional(),
      meanAdjustment: z.boolean().optional(),
      name: z.string().optional(),
      performance: z.string().optional(),
      sharePriceDividendAdjustment: z.boolean().optional(),
      valuationTerms: z.lazy(() => CdmProductAssetValuationTermsSchema),
    })
  );

export type CdmProductAssetReturnTermsBase = z.infer<
  typeof CdmProductAssetReturnTermsBaseSchema
>;
