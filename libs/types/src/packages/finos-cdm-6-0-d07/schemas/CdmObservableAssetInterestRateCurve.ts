import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnum';

export const CdmObservableAssetInterestRateCurveSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/InterestRateCurve']
  )(
    z.object({
      floatingRateIndex: z.lazy(
        () =>
          CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema
      ),
      name: z.string().optional(),
      tenor: z.lazy(() => CdmBaseDatetimePeriodSchema),
    })
  );

export type CdmObservableAssetInterestRateCurve = z.infer<
  typeof CdmObservableAssetInterestRateCurveSchema
>;
