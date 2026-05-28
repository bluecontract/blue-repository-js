import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeightsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/CalculatedRateObservationDatesAndWeights'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      observationDates: z.array(z.string()).min(0).optional(),
      weights: z.array(z.number()).min(0).optional(),
    })
  );

export type CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeights =
  z.infer<
    typeof CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeightsSchema
  >;
