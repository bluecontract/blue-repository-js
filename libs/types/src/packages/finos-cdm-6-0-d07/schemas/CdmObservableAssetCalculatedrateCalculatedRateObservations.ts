import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetCalculatedrateCalculatedRateObservationsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/CalculatedRateObservations'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      observationDates: zod.array(zod.string()).min(0).optional(),
      observedRates: zod.array(zod.number()).min(0).optional(),
      processedRates: zod.array(zod.number()).min(0).optional(),
      weights: zod.array(zod.number()).min(0).optional(),
    })
  );

export type CdmObservableAssetCalculatedrateCalculatedRateObservations =
  z.infer<
    typeof CdmObservableAssetCalculatedrateCalculatedRateObservationsSchema
  >;
