import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonScheduleCalculationPeriodBaseSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/CalculationPeriodBase'
    ]
  )(
    z.object({
      adjustedEndDate: z.string().optional(),
      adjustedStartDate: z.string().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCommonScheduleCalculationPeriodBase = z.infer<
  typeof CdmProductCommonScheduleCalculationPeriodBaseSchema
>;
