import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodExtendedEnumSchema } from './CdmBaseDatetimePeriodExtendedEnum';
import { CdmProductCommonScheduleWeeklyRollConventionEnumSchema } from './CdmProductCommonScheduleWeeklyRollConventionEnum';

export const CdmProductCommonScheduleResetFrequencySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ResetFrequency']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      period: z.lazy(() => CdmBaseDatetimePeriodExtendedEnumSchema).optional(),
      periodMultiplier: z.number().optional(),
      weeklyRollConvention: z
        .lazy(() => CdmProductCommonScheduleWeeklyRollConventionEnumSchema)
        .optional(),
    })
  );

export type CdmProductCommonScheduleResetFrequency = z.infer<
  typeof CdmProductCommonScheduleResetFrequencySchema
>;
