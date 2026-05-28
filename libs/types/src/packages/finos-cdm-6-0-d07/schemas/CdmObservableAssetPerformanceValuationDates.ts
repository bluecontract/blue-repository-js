import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema } from './CdmBaseDatetimeAdjustableRelativeOrPeriodicDates';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';
import { CdmObservableCommonTimeTypeEnumSchema } from './CdmObservableCommonTimeTypeEnum';

export const CdmObservableAssetPerformanceValuationDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PerformanceValuationDates']
  )(
    z.object({
      description: z.string().optional(),
      determinationMethod: z.lazy(
        () => CdmObservableCommonDeterminationMethodEnumSchema
      ),
      name: z.string().optional(),
      valuationDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      valuationDates: z
        .lazy(() => CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema)
        .optional(),
      valuationTime: z
        .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
        .optional(),
      valuationTimeType: z
        .lazy(() => CdmObservableCommonTimeTypeEnumSchema)
        .optional(),
    })
  );

export type CdmObservableAssetPerformanceValuationDates = z.infer<
  typeof CdmObservableAssetPerformanceValuationDatesSchema
>;
