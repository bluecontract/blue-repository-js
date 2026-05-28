import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonScheduleCalculationPeriodDataSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/CalculationPeriodData'
    ]
  )(
    z.object({
      daysInLeapYearPeriod: z.number(),
      daysInPeriod: z.number(),
      endDate: z.string(),
      isFirstPeriod: z.boolean(),
      isLastPeriod: z.boolean(),
      name: z.string().optional(),
      startDate: z.string(),
    })
  );

export type CdmProductCommonScheduleCalculationPeriodData = z.infer<
  typeof CdmProductCommonScheduleCalculationPeriodDataSchema
>;
