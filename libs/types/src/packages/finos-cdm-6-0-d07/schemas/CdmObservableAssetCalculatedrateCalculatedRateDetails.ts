import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCalculatedrateCalculatedRateObservationsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateObservations';

export const CdmObservableAssetCalculatedrateCalculatedRateDetailsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/CalculatedRateDetails'
    ]
  )(
    z.object({
      aggregateValue: z.number().optional(),
      aggregateWeight: z.number().optional(),
      calculatedRate: z.number().optional(),
      compoundedGrowth: z.array(z.number()).min(0).optional(),
      description: z.string().optional(),
      growthFactor: z.array(z.number()).min(0).optional(),
      name: z.string().optional(),
      observations: z
        .lazy(
          () => CdmObservableAssetCalculatedrateCalculatedRateObservationsSchema
        )
        .optional(),
      weightedRates: z.array(z.number()).min(0).optional(),
    })
  );

export type CdmObservableAssetCalculatedrateCalculatedRateDetails = z.infer<
  typeof CdmObservableAssetCalculatedrateCalculatedRateDetailsSchema
>;
