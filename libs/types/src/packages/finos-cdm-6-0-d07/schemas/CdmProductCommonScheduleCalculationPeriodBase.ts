import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonScheduleCalculationPeriodBaseSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/CalculationPeriodBase'
    ]
  )(
    zod.object({
      adjustedEndDate: zod.string().optional(),
      adjustedStartDate: zod.string().optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductCommonScheduleCalculationPeriodBase = z.infer<
  typeof CdmProductCommonScheduleCalculationPeriodBaseSchema
>;
