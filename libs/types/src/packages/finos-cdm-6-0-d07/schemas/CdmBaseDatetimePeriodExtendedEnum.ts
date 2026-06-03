import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseDatetimePeriodExtendedEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/PeriodExtendedEnum']
)(
  zod.enum(['C', 'D', 'H', 'M', 'T', 'W', 'Y'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmBaseDatetimePeriodExtendedEnum = z.infer<
  typeof CdmBaseDatetimePeriodExtendedEnumSchema
>;
