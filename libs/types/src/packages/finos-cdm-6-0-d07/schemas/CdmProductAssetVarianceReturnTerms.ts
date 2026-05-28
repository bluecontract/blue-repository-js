import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathNonNegativeQuantityScheduleSchema } from './CdmBaseMathNonNegativeQuantitySchedule';
import { CdmObservableAssetDividendApplicabilitySchema } from './CdmObservableAssetDividendApplicability';
import { CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaObservable';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';
import { CdmProductAssetEquityUnderlierProvisionsSchema } from './CdmProductAssetEquityUnderlierProvisions';
import { CdmProductAssetValuationTermsSchema } from './CdmProductAssetValuationTerms';
import { CdmProductAssetVarianceCapFloorSchema } from './CdmProductAssetVarianceCapFloor';
import { CdmProductAssetVolatilityCapFloorSchema } from './CdmProductAssetVolatilityCapFloor';

export const CdmProductAssetVarianceReturnTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/VarianceReturnTerms']
  )(
    z.object({
      annualizationFactor: z.number().optional(),
      dividendApplicability: z
        .lazy(() => CdmObservableAssetDividendApplicabilitySchema)
        .optional(),
      equityUnderlierProvisions: z
        .lazy(() => CdmProductAssetEquityUnderlierProvisionsSchema)
        .optional(),
      exchangeTradedContractNearest: z
        .lazy(
          () => CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema
        )
        .optional(),
      expectedN: z.number().optional(),
      initialLevel: z.number().optional(),
      initialLevelSource: z
        .lazy(() => CdmObservableCommonDeterminationMethodEnumSchema)
        .optional(),
      meanAdjustment: z.boolean().optional(),
      name: z.string().optional(),
      performance: z.string().optional(),
      sharePriceDividendAdjustment: z.boolean().optional(),
      valuationTerms: z
        .lazy(() => CdmProductAssetValuationTermsSchema)
        .optional(),
      varianceCapFloor: z
        .lazy(() => CdmProductAssetVarianceCapFloorSchema)
        .optional(),
      varianceStrikePrice: z
        .lazy(() => CdmObservableAssetPriceSchema)
        .optional(),
      vegaNotionalAmount: z
        .lazy(() => CdmBaseMathNonNegativeQuantityScheduleSchema)
        .optional(),
      volatilityCapFloor: z
        .lazy(() => CdmProductAssetVolatilityCapFloorSchema)
        .optional(),
      volatilityStrikePrice: z
        .lazy(() => CdmObservableAssetPriceSchema)
        .optional(),
    })
  );

export type CdmProductAssetVarianceReturnTerms = z.infer<
  typeof CdmProductAssetVarianceReturnTermsSchema
>;
