import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseDatetimePeriodTimeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/PeriodTimeEnum']
)(
  zod.enum(['Hour', 'Minute', 'Second'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmBaseDatetimePeriodTimeEnum = z.infer<
  typeof CdmBaseDatetimePeriodTimeEnumSchema
>;
