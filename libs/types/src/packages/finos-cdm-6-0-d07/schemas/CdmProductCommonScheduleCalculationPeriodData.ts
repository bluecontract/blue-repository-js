import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonScheduleCalculationPeriodDataSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/CalculationPeriodData'
    ]
  )(
    zod.object({
      daysInLeapYearPeriod: zod.number(),
      daysInPeriod: zod.number(),
      endDate: zod.string(),
      isFirstPeriod: zod.boolean(),
      isLastPeriod: zod.boolean(),
      name: zod.string().optional(),
      startDate: zod.string(),
    })
  );

export type CdmProductCommonScheduleCalculationPeriodData = z.infer<
  typeof CdmProductCommonScheduleCalculationPeriodDataSchema
>;
