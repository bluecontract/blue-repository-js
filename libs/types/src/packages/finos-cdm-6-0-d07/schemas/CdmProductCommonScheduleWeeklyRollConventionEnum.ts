import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonScheduleWeeklyRollConventionEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/WeeklyRollConventionEnum'
    ]
  )(
    zod.enum(['FRI', 'MON', 'SAT', 'SUN', 'TBILL', 'THU', 'TUE', 'WED'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCommonScheduleWeeklyRollConventionEnum = z.infer<
  typeof CdmProductCommonScheduleWeeklyRollConventionEnumSchema
>;
