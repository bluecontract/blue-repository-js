import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeightsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/CalculatedRateObservationDatesAndWeights'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      observationDates: zod.array(zod.string()).min(0).optional(),
      weights: zod.array(zod.number()).min(0).optional(),
    })
  );

export type CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeights =
  z.infer<
    typeof CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeightsSchema
  >;
