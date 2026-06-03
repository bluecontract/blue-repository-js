import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodExtendedEnumSchema } from './CdmBaseDatetimePeriodExtendedEnum';
import { CdmProductCommonScheduleWeeklyRollConventionEnumSchema } from './CdmProductCommonScheduleWeeklyRollConventionEnum';

const zod = z as any;

export const CdmProductCommonScheduleResetFrequencySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ResetFrequency']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    period: zod.lazy(() => CdmBaseDatetimePeriodExtendedEnumSchema).optional(),
    periodMultiplier: zod.number().optional(),
    weeklyRollConvention: zod
      .lazy(() => CdmProductCommonScheduleWeeklyRollConventionEnumSchema)
      .optional(),
  })
);

export type CdmProductCommonScheduleResetFrequency = z.infer<
  typeof CdmProductCommonScheduleResetFrequencySchema
>;
