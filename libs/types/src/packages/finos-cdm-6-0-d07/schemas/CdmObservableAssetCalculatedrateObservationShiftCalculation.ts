import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
import { CdmObservableAssetCalculatedrateObservationPeriodDatesEnumSchema } from './CdmObservableAssetCalculatedrateObservationPeriodDatesEnum';

const zod = z as any;

export const CdmObservableAssetCalculatedrateObservationShiftCalculationSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/ObservationShiftCalculation'
    ]
  )(
    zod.object({
      additionalBusinessDays: zod
        .lazy(() => CdmBaseDatetimeBusinessCentersSchema)
        .optional(),
      calculationBase: zod
        .lazy(
          () => CdmObservableAssetCalculatedrateObservationPeriodDatesEnumSchema
        )
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      offsetDays: zod.number().optional(),
    })
  );

export type CdmObservableAssetCalculatedrateObservationShiftCalculation =
  z.infer<
    typeof CdmObservableAssetCalculatedrateObservationShiftCalculationSchema
  >;
