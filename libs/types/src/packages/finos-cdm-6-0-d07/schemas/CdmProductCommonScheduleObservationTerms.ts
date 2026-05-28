import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';
import { CdmObservableAssetFxSpotRateSourceSchema } from './CdmObservableAssetFxSpotRateSource';
import { CdmObservableCommonTimeTypeEnumSchema } from './CdmObservableCommonTimeTypeEnum';
import { CdmProductCommonScheduleCalculationPeriodDatesSchema } from './CdmProductCommonScheduleCalculationPeriodDates';
import { CdmProductCommonScheduleObservationDatesSchema } from './CdmProductCommonScheduleObservationDates';

export const CdmProductCommonScheduleObservationTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ObservationTerms']
  )(
    z.object({
      calculationPeriodDates: z
        .lazy(() => CdmProductCommonScheduleCalculationPeriodDatesSchema)
        .optional(),
      description: z.string().optional(),
      informationSource: z
        .lazy(() => CdmObservableAssetFxSpotRateSourceSchema)
        .optional(),
      name: z.string().optional(),
      numberOfObservationDates: z.number().optional(),
      observationDates: z.lazy(
        () => CdmProductCommonScheduleObservationDatesSchema
      ),
      observationTime: z
        .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
        .optional(),
      observationTimeType: z
        .lazy(() => CdmObservableCommonTimeTypeEnumSchema)
        .optional(),
      precision: z.lazy(() => CdmBaseMathRoundingSchema).optional(),
    })
  );

export type CdmProductCommonScheduleObservationTerms = z.infer<
  typeof CdmProductCommonScheduleObservationTermsSchema
>;
