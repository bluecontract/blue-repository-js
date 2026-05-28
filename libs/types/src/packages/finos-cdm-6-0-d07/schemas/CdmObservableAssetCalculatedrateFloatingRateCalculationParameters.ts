import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
import { CdmObservableAssetCalculatedrateCalculationMethodEnumSchema } from './CdmObservableAssetCalculatedrateCalculationMethodEnum';
import { CdmObservableAssetCalculatedrateObservationParametersSchema } from './CdmObservableAssetCalculatedrateObservationParameters';
import { CdmObservableAssetCalculatedrateObservationShiftCalculationSchema } from './CdmObservableAssetCalculatedrateObservationShiftCalculation';
import { CdmObservableAssetCalculatedrateOffsetCalculationSchema } from './CdmObservableAssetCalculatedrateOffsetCalculation';

export const CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/FloatingRateCalculationParameters'
    ]
  )(
    z.object({
      applicableBusinessDays: z
        .lazy(() => CdmBaseDatetimeBusinessCentersSchema)
        .optional(),
      calculationMethod: z.lazy(
        () => CdmObservableAssetCalculatedrateCalculationMethodEnumSchema
      ),
      description: z.string().optional(),
      lockoutCalculation: z
        .lazy(() => CdmObservableAssetCalculatedrateOffsetCalculationSchema)
        .optional(),
      lookbackCalculation: z
        .lazy(() => CdmObservableAssetCalculatedrateOffsetCalculationSchema)
        .optional(),
      name: z.string().optional(),
      observationParameters: z
        .lazy(() => CdmObservableAssetCalculatedrateObservationParametersSchema)
        .optional(),
      observationShiftCalculation: z
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
