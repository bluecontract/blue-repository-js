import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathNumberRangeSchema } from './CdmBaseMathNumberRange';
import { CdmObservableAssetDividendApplicabilitySchema } from './CdmObservableAssetDividendApplicability';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';
import { CdmProductAssetEquityUnderlierProvisionsSchema } from './CdmProductAssetEquityUnderlierProvisions';
import { CdmProductAssetValuationTermsSchema } from './CdmProductAssetValuationTerms';

const zod = z as any;

export const CdmProductAssetCorrelationReturnTermsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/CorrelationReturnTerms']
)(
  zod.object({
    annualizationFactor: zod.number().optional(),
    boundedCorrelation: zod.lazy(() => CdmBaseMathNumberRangeSchema).optional(),
    correlationStrikePrice: zod.lazy(() => CdmObservableAssetPriceSchema),
    dividendApplicability: zod
      .lazy(() => CdmObservableAssetDividendApplicabilitySchema)
      .optional(),
    equityUnderlierProvisions: zod
      .lazy(() => CdmProductAssetEquityUnderlierProvisionsSchema)
      .optional(),
    expectedN: zod.number().optional(),
    initialLevel: zod.number().optional(),
    initialLevelSource: zod
      .lazy(() => CdmObservableCommonDeterminationMethodEnumSchema)
      .optional(),
    meanAdjustment: zod.boolean().optional(),
    name: zod.string().optional(),
    numberOfDataSeries: zod.number().optional(),
    performance: zod.string().optional(),
    sharePriceDividendAdjustment: zod.boolean().optional(),
    valuationTerms: zod
      .lazy(() => CdmProductAssetValuationTermsSchema)
      .optional(),
  })
);

export type CdmProductAssetCorrelationReturnTerms = z.infer<
  typeof CdmProductAssetCorrelationReturnTermsSchema
>;
