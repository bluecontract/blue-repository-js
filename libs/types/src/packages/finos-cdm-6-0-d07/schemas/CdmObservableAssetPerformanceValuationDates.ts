import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema } from './CdmBaseDatetimeAdjustableRelativeOrPeriodicDates';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';
import { CdmObservableCommonTimeTypeEnumSchema } from './CdmObservableCommonTimeTypeEnum';

const zod = z as any;

export const CdmObservableAssetPerformanceValuationDatesSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PerformanceValuationDates']
  )(
    zod.object({
      description: zod.string().optional(),
      determinationMethod: zod.lazy(
        () => CdmObservableCommonDeterminationMethodEnumSchema
      ),
      name: zod.string().optional(),
      valuationDate: zod
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      valuationDates: zod
        .lazy(() => CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema)
        .optional(),
      valuationTime: zod
        .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
        .optional(),
      valuationTimeType: zod
        .lazy(() => CdmObservableCommonTimeTypeEnumSchema)
        .optional(),
    })
  );

export type CdmObservableAssetPerformanceValuationDates = z.infer<
  typeof CdmObservableAssetPerformanceValuationDatesSchema
>;
