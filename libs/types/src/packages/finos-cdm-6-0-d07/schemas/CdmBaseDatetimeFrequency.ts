import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodExtendedEnumSchema } from './CdmBaseDatetimePeriodExtendedEnum';

export const CdmBaseDatetimeFrequencySchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/Frequency']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    period: z.lazy(() => CdmBaseDatetimePeriodExtendedEnumSchema),
    periodMultiplier: z.number(),
  })
);

export type CdmBaseDatetimeFrequency = z.infer<
  typeof CdmBaseDatetimeFrequencySchema
>;
