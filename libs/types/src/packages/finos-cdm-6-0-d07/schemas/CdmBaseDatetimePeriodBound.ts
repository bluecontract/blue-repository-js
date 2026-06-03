import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';

const zod = z as any;

export const CdmBaseDatetimePeriodBoundSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/PeriodBound']
)(
  zod.object({
    description: zod.string().optional(),
    inclusive: zod.boolean(),
    name: zod.string().optional(),
    period: zod.lazy(() => CdmBaseDatetimePeriodSchema),
  })
);

export type CdmBaseDatetimePeriodBound = z.infer<
  typeof CdmBaseDatetimePeriodBoundSchema
>;
