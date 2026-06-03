import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonScheduleResetRelativeToEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ResetRelativeToEnum']
  )(
    zod.enum(['CalculationPeriodEndDate', 'CalculationPeriodStartDate'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCommonScheduleResetRelativeToEnum = z.infer<
  typeof CdmProductCommonScheduleResetRelativeToEnumSchema
>;
