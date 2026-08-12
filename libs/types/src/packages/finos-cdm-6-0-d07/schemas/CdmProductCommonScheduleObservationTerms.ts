import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';
import { CdmObservableAssetFxSpotRateSourceSchema } from './CdmObservableAssetFxSpotRateSource';
import { CdmObservableCommonTimeTypeEnumSchema } from './CdmObservableCommonTimeTypeEnum';
import { CdmProductCommonScheduleCalculationPeriodDatesSchema } from './CdmProductCommonScheduleCalculationPeriodDates';
import { CdmProductCommonScheduleObservationDatesSchema } from './CdmProductCommonScheduleObservationDates';

const zod = z as any;

export const CdmProductCommonScheduleObservationTermsSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ObservationTerms']
  )(
    zod.object({
      calculationPeriodDates: zod
        .lazy(() => CdmProductCommonScheduleCalculationPeriodDatesSchema)
        .optional(),
      description: zod.string().optional(),
      informationSource: zod
        .lazy(() => CdmObservableAssetFxSpotRateSourceSchema)
        .optional(),
      name: zod.string().optional(),
      numberOfObservationDates: zod.number().optional(),
      observationDates: zod.lazy(
        () => CdmProductCommonScheduleObservationDatesSchema
      ),
      observationTime: zod
        .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
        .optional(),
      observationTimeType: zod
        .lazy(() => CdmObservableCommonTimeTypeEnumSchema)
        .optional(),
      precision: zod.lazy(() => CdmBaseMathRoundingSchema).optional(),
    })
  );

export type CdmProductCommonScheduleObservationTerms = z.infer<
  typeof CdmProductCommonScheduleObservationTermsSchema
>;
