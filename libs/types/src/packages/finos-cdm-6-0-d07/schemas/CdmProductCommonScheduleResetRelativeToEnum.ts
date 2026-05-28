import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonScheduleResetRelativeToEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ResetRelativeToEnum']
  )(
    z.enum(['CalculationPeriodEndDate', 'CalculationPeriodStartDate'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCommonScheduleResetRelativeToEnum = z.infer<
  typeof CdmProductCommonScheduleResetRelativeToEnumSchema
>;
