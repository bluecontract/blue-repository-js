import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathNumberRangeSchema } from './CdmBaseMathNumberRange';
import { CdmObservableAssetDividendApplicabilitySchema } from './CdmObservableAssetDividendApplicability';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';
import { CdmProductAssetEquityUnderlierProvisionsSchema } from './CdmProductAssetEquityUnderlierProvisions';
import { CdmProductAssetValuationTermsSchema } from './CdmProductAssetValuationTerms';

export const CdmProductAssetCorrelationReturnTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/CorrelationReturnTerms']
  )(
    z.object({
      annualizationFactor: z.number().optional(),
      boundedCorrelation: z.lazy(() => CdmBaseMathNumberRangeSchema).optional(),
      correlationStrikePrice: z.lazy(() => CdmObservableAssetPriceSchema),
      dividendApplicability: z
        .lazy(() => CdmObservableAssetDividendApplicabilitySchema)
        .optional(),
      equityUnderlierProvisions: z
        .lazy(() => CdmProductAssetEquityUnderlierProvisionsSchema)
        .optional(),
      expectedN: z.number().optional(),
      initialLevel: z.number().optional(),
      initialLevelSource: z
        .lazy(() => CdmObservableCommonDeterminationMethodEnumSchema)
        .optional(),
      meanAdjustment: z.boolean().optional(),
      name: z.string().optional(),
      numberOfDataSeries: z.number().optional(),
      performance: z.string().optional(),
      sharePriceDividendAdjustment: z.boolean().optional(),
      valuationTerms: z
        .lazy(() => CdmProductAssetValuationTermsSchema)
        .optional(),
    })
  );

export type CdmProductAssetCorrelationReturnTerms = z.infer<
  typeof CdmProductAssetCorrelationReturnTermsSchema
>;
