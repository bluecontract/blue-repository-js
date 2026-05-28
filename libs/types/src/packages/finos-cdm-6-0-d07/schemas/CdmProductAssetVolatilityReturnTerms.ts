import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonListedDerivativeSchema } from './CdmBaseStaticdataAssetCommonListedDerivative';
import { CdmObservableAssetDividendApplicabilitySchema } from './CdmObservableAssetDividendApplicability';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';
import { CdmProductAssetEquityUnderlierProvisionsSchema } from './CdmProductAssetEquityUnderlierProvisions';
import { CdmProductAssetValuationTermsSchema } from './CdmProductAssetValuationTerms';
import { CdmProductAssetVolatilityCapFloorSchema } from './CdmProductAssetVolatilityCapFloor';

export const CdmProductAssetVolatilityReturnTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/VolatilityReturnTerms']
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
        .lazy(() => CdmBaseStaticdataAssetCommonListedDerivativeSchema)
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
      volatilityCapFloor: z
        .lazy(() => CdmProductAssetVolatilityCapFloorSchema)
        .optional(),
      volatilityStrikePrice: z.lazy(() => CdmObservableAssetPriceSchema),
    })
  );

export type CdmProductAssetVolatilityReturnTerms = z.infer<
  typeof CdmProductAssetVolatilityReturnTermsSchema
>;
