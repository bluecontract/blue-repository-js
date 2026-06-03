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

const zod = z as any;

export const CdmProductAssetVolatilityReturnTermsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/VolatilityReturnTerms']
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
      .lazy(() => CdmBaseStaticdataAssetCommonListedDerivativeSchema)
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
    volatilityCapFloor: zod
      .lazy(() => CdmProductAssetVolatilityCapFloorSchema)
      .optional(),
    volatilityStrikePrice: zod.lazy(() => CdmObservableAssetPriceSchema),
  })
);

export type CdmProductAssetVolatilityReturnTerms = z.infer<
  typeof CdmProductAssetVolatilityReturnTermsSchema
>;
