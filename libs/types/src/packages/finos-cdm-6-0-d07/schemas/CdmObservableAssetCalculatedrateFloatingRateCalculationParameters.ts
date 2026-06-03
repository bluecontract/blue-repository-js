import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
import { CdmObservableAssetCalculatedrateCalculationMethodEnumSchema } from './CdmObservableAssetCalculatedrateCalculationMethodEnum';
import { CdmObservableAssetCalculatedrateObservationParametersSchema } from './CdmObservableAssetCalculatedrateObservationParameters';
import { CdmObservableAssetCalculatedrateObservationShiftCalculationSchema } from './CdmObservableAssetCalculatedrateObservationShiftCalculation';
import { CdmObservableAssetCalculatedrateOffsetCalculationSchema } from './CdmObservableAssetCalculatedrateOffsetCalculation';

const zod = z as any;

export const CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/FloatingRateCalculationParameters'
    ]
  )(
    zod.object({
      applicableBusinessDays: zod
        .lazy(() => CdmBaseDatetimeBusinessCentersSchema)
        .optional(),
      calculationMethod: zod.lazy(
        () => CdmObservableAssetCalculatedrateCalculationMethodEnumSchema
      ),
      description: zod.string().optional(),
      lockoutCalculation: zod
        .lazy(() => CdmObservableAssetCalculatedrateOffsetCalculationSchema)
        .optional(),
      lookbackCalculation: zod
        .lazy(() => CdmObservableAssetCalculatedrateOffsetCalculationSchema)
        .optional(),
      name: zod.string().optional(),
      observationParameters: zod
        .lazy(() => CdmObservableAssetCalculatedrateObservationParametersSchema)
        .optional(),
      observationShiftCalculation: zod
        .lazy(
          () =>
            CdmObservableAssetCalculatedrateObservationShiftCalculationSchema
        )
        .optional(),
    })
  );

export type CdmObservableAssetCalculatedrateFloatingRateCalculationParameters =
  z.infer<
    typeof CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema
  >;
