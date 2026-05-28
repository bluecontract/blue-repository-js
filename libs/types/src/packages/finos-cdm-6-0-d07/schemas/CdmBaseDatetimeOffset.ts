import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeDayTypeEnumSchema } from './CdmBaseDatetimeDayTypeEnum';
import { CdmBaseDatetimePeriodEnumSchema } from './CdmBaseDatetimePeriodEnum';

export const CdmBaseDatetimeOffsetSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/Offset']
)(
  z.object({
    dayType: z.lazy(() => CdmBaseDatetimeDayTypeEnumSchema).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    period: z.lazy(() => CdmBaseDatetimePeriodEnumSchema).optional(),
    periodMultiplier: z.number().optional(),
  })
);

export type CdmBaseDatetimeOffset = z.infer<typeof CdmBaseDatetimeOffsetSchema>;
