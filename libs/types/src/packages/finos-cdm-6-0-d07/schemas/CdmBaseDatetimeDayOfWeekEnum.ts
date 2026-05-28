import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseDatetimeDayOfWeekEnumSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/DayOfWeekEnum']
)(
  z.enum(['FRI', 'MON', 'SAT', 'SUN', 'THU', 'TUE', 'WED'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmBaseDatetimeDayOfWeekEnum = z.infer<
  typeof CdmBaseDatetimeDayOfWeekEnumSchema
>;
