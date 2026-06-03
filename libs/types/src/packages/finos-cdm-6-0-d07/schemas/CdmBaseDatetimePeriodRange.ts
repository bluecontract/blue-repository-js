import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodBoundSchema } from './CdmBaseDatetimePeriodBound';

const zod = z as any;

export const CdmBaseDatetimePeriodRangeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/PeriodRange']
)(
  zod.object({
    description: zod.string().optional(),
    lowerBound: zod.lazy(() => CdmBaseDatetimePeriodBoundSchema).optional(),
    name: zod.string().optional(),
    upperBound: zod.lazy(() => CdmBaseDatetimePeriodBoundSchema).optional(),
  })
);

export type CdmBaseDatetimePeriodRange = z.infer<
  typeof CdmBaseDatetimePeriodRangeSchema
>;
