import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseDatetimePeriodEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/PeriodEnum']
)(
  zod.enum(['D', 'M', 'W', 'Y'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmBaseDatetimePeriodEnum = z.infer<
  typeof CdmBaseDatetimePeriodEnumSchema
>;
