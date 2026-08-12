import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseDatetimeDayOfWeekEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/DayOfWeekEnum']
)(
  zod.enum(['FRI', 'MON', 'SAT', 'SUN', 'THU', 'TUE', 'WED'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmBaseDatetimeDayOfWeekEnum = z.infer<
  typeof CdmBaseDatetimeDayOfWeekEnumSchema
>;
