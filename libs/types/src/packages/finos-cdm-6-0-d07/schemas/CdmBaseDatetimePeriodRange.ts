import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodBoundSchema } from './CdmBaseDatetimePeriodBound';

export const CdmBaseDatetimePeriodRangeSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/PeriodRange']
)(
  z.object({
    description: z.string().optional(),
    lowerBound: z.lazy(() => CdmBaseDatetimePeriodBoundSchema).optional(),
    name: z.string().optional(),
    upperBound: z.lazy(() => CdmBaseDatetimePeriodBoundSchema).optional(),
  })
);

export type CdmBaseDatetimePeriodRange = z.infer<
  typeof CdmBaseDatetimePeriodRangeSchema
>;
