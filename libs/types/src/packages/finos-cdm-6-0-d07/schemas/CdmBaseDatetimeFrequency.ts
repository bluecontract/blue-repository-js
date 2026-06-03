import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodExtendedEnumSchema } from './CdmBaseDatetimePeriodExtendedEnum';

const zod = z as any;

export const CdmBaseDatetimeFrequencySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/Frequency']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    period: zod.lazy(() => CdmBaseDatetimePeriodExtendedEnumSchema),
    periodMultiplier: zod.number(),
  })
);

export type CdmBaseDatetimeFrequency = z.infer<
  typeof CdmBaseDatetimeFrequencySchema
>;
