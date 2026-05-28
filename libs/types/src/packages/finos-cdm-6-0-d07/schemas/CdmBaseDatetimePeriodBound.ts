import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';

export const CdmBaseDatetimePeriodBoundSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/PeriodBound']
)(
  z.object({
    description: z.string().optional(),
    inclusive: z.boolean(),
    name: z.string().optional(),
    period: z.lazy(() => CdmBaseDatetimePeriodSchema),
  })
);

export type CdmBaseDatetimePeriodBound = z.infer<
  typeof CdmBaseDatetimePeriodBoundSchema
>;
