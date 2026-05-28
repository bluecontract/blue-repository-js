import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetCalculatedrateCalculatedRateObservationsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/CalculatedRateObservations'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      observationDates: z.array(z.string()).min(0).optional(),
      observedRates: z.array(z.number()).min(0).optional(),
      processedRates: z.array(z.number()).min(0).optional(),
      weights: z.array(z.number()).min(0).optional(),
    })
  );

export type CdmObservableAssetCalculatedrateCalculatedRateObservations =
  z.infer<
    typeof CdmObservableAssetCalculatedrateCalculatedRateObservationsSchema
  >;
