import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaRateObservationSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaRateObservation';

export const CdmObservableAssetRateObservationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/RateObservation']
  )(
    z.object({
      adjustedFixingDate: z.string().optional(),
      description: z.string().optional(),
      forecastRate: z.number().optional(),
      name: z.string().optional(),
      observationWeight: z.number().optional(),
      observedRate: z.number().optional(),
      rateReference: z
        .lazy(
          () =>
            CdmObservableAssetMetafieldsReferenceWithMetaRateObservationSchema
        )
        .optional(),
      resetDate: z.string().optional(),
      treatedForecastRate: z.number().optional(),
      treatedRate: z.number().optional(),
    })
  );

export type CdmObservableAssetRateObservation = z.infer<
  typeof CdmObservableAssetRateObservationSchema
>;
