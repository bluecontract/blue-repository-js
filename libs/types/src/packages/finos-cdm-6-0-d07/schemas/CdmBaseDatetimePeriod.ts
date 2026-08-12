import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodEnumSchema } from './CdmBaseDatetimePeriodEnum';

const zod = z as any;

export const CdmBaseDatetimePeriodSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/Period']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    period: zod.lazy(() => CdmBaseDatetimePeriodEnumSchema),
    periodMultiplier: zod.number(),
  })
);

export type CdmBaseDatetimePeriod = z.infer<typeof CdmBaseDatetimePeriodSchema>;
