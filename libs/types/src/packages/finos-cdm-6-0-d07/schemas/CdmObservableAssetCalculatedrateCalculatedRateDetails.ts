import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCalculatedrateCalculatedRateObservationsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateObservations';

const zod = z as any;

export const CdmObservableAssetCalculatedrateCalculatedRateDetailsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/CalculatedRateDetails'
    ]
  )(
    zod.object({
      aggregateValue: zod.number().optional(),
      aggregateWeight: zod.number().optional(),
      calculatedRate: zod.number().optional(),
      compoundedGrowth: zod.array(zod.number()).min(0).optional(),
      description: zod.string().optional(),
      growthFactor: zod.array(zod.number()).min(0).optional(),
      name: zod.string().optional(),
      observations: zod
        .lazy(
          () => CdmObservableAssetCalculatedrateCalculatedRateObservationsSchema
        )
        .optional(),
      weightedRates: zod.array(zod.number()).min(0).optional(),
    })
  );

export type CdmObservableAssetCalculatedrateCalculatedRateDetails = z.infer<
  typeof CdmObservableAssetCalculatedrateCalculatedRateDetailsSchema
>;
