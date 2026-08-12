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

const zod = z as any;

export const CdmProductAssetVarianceReturnTermsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/VarianceReturnTerms']
)(
  zod.object({
    annualizationFactor: zod.number().optional(),
    dividendApplicability: zod
      .lazy(() => CdmObservableAssetDividendApplicabilitySchema)
      .optional(),
    equityUnderlierProvisions: zod
      .lazy(() => CdmProductAssetEquityUnderlierProvisionsSchema)
      .optional(),
    exchangeTradedContractNearest: zod
      .lazy(() => CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema)
      .optional(),
    expectedN: zod.number().optional(),
    initialLevel: zod.number().optional(),
    initialLevelSource: zod
      .lazy(() => CdmObservableCommonDeterminationMethodEnumSchema)
      .optional(),
    meanAdjustment: zod.boolean().optional(),
    name: zod.string().optional(),
    performance: zod.string().optional(),
    sharePriceDividendAdjustment: zod.boolean().optional(),
    valuationTerms: zod
      .lazy(() => CdmProductAssetValuationTermsSchema)
      .optional(),
    varianceCapFloor: zod
      .lazy(() => CdmProductAssetVarianceCapFloorSchema)
      .optional(),
    varianceStrikePrice: zod
      .lazy(() => CdmObservableAssetPriceSchema)
      .optional(),
    vegaNotionalAmount: zod
      .lazy(() => CdmBaseMathNonNegativeQuantityScheduleSchema)
      .optional(),
    volatilityCapFloor: zod
      .lazy(() => CdmProductAssetVolatilityCapFloorSchema)
      .optional(),
    volatilityStrikePrice: zod
      .lazy(() => CdmObservableAssetPriceSchema)
      .optional(),
  })
);

export type CdmProductAssetVarianceReturnTerms = z.infer<
  typeof CdmProductAssetVarianceReturnTermsSchema
>;
