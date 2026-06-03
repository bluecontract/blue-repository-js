import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseDatetimeDaycountDayCountFractionEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/daycount/DayCountFractionEnum']
  )(
    zod.enum([
      'ACT/360',
      'ACT/364',
      'ACT/365L',
      'ACT/365.FIXED',
      'ACT/ACT.AFB',
      'ACT/ACT.ICMA',
      'ACT/ACT.ISDA',
      'ACT/ACT.ISMA',
      'CAL/252',
      'RBA Bond Basis',
      '1/1',
      '30E/360',
      '30E/360.ISDA',
      '30/360',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseDatetimeDaycountDayCountFractionEnum = z.infer<
  typeof CdmBaseDatetimeDaycountDayCountFractionEnumSchema
>;
