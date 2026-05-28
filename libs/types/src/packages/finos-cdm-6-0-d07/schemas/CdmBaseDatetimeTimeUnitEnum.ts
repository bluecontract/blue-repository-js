import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseDatetimeTimeUnitEnumSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/TimeUnitEnum']
)(
  z.enum(['Day', 'Hour', 'Minute', 'Month', 'Second', 'Week', 'Year'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmBaseDatetimeTimeUnitEnum = z.infer<
  typeof CdmBaseDatetimeTimeUnitEnumSchema
>;
