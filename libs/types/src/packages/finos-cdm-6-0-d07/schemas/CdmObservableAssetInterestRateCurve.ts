import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnum';

const zod = z as any;

export const CdmObservableAssetInterestRateCurveSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/InterestRateCurve']
)(
  zod.object({
    floatingRateIndex: zod.lazy(
      () => CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema
    ),
    name: zod.string().optional(),
    tenor: zod.lazy(() => CdmBaseDatetimePeriodSchema),
  })
);

export type CdmObservableAssetInterestRateCurve = z.infer<
  typeof CdmObservableAssetInterestRateCurveSchema
>;
