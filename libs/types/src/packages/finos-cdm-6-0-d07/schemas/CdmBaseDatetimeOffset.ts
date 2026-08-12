import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeDayTypeEnumSchema } from './CdmBaseDatetimeDayTypeEnum';
import { CdmBaseDatetimePeriodEnumSchema } from './CdmBaseDatetimePeriodEnum';

const zod = z as any;

export const CdmBaseDatetimeOffsetSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/Offset']
)(
  zod.object({
    dayType: zod.lazy(() => CdmBaseDatetimeDayTypeEnumSchema).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    period: zod.lazy(() => CdmBaseDatetimePeriodEnumSchema).optional(),
    periodMultiplier: zod.number().optional(),
  })
);

export type CdmBaseDatetimeOffset = z.infer<typeof CdmBaseDatetimeOffsetSchema>;
