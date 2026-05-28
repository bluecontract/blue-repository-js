import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonSchedulePayRelativeToEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/PayRelativeToEnum']
  )(
    z.enum([
      'CalculationPeriodEndDate',
      'CalculationPeriodStartDate',
      'LastPricingDate',
      'ResetDate',
      'ValuationDate',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductCommonSchedulePayRelativeToEnum = z.infer<
  typeof CdmProductCommonSchedulePayRelativeToEnumSchema
>;
