import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
import { CdmObservableAssetCalculatedrateObservationPeriodDatesEnumSchema } from './CdmObservableAssetCalculatedrateObservationPeriodDatesEnum';

export const CdmObservableAssetCalculatedrateObservationShiftCalculationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/ObservationShiftCalculation'
    ]
  )(
    z.object({
      additionalBusinessDays: z
        .lazy(() => CdmBaseDatetimeBusinessCentersSchema)
        .optional(),
      calculationBase: z
        .lazy(
          () => CdmObservableAssetCalculatedrateObservationPeriodDatesEnumSchema
        )
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      offsetDays: z.number().optional(),
    })
  );

export type CdmObservableAssetCalculatedrateObservationShiftCalculation =
  z.infer<
    typeof CdmObservableAssetCalculatedrateObservationShiftCalculationSchema
  >;
