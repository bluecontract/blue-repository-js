import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseDatetimePeriodTimeEnumSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/PeriodTimeEnum']
)(
  z.enum(['Hour', 'Minute', 'Second'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmBaseDatetimePeriodTimeEnum = z.infer<
  typeof CdmBaseDatetimePeriodTimeEnumSchema
>;
