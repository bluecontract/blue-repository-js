import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodEnumSchema } from './CdmBaseDatetimePeriodEnum';

export const CdmBaseDatetimePeriodSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/Period']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    period: z.lazy(() => CdmBaseDatetimePeriodEnumSchema),
    periodMultiplier: z.number(),
  })
);

export type CdmBaseDatetimePeriod = z.infer<typeof CdmBaseDatetimePeriodSchema>;
