import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonSchedulePayRelativeToEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/PayRelativeToEnum']
  )(
    zod.enum([
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
