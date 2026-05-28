import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseDatetimeDateTimeListSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/DateTimeList']
)(
  z.object({
    dateTime: z.array(z.string()).min(1).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type CdmBaseDatetimeDateTimeList = z.infer<
  typeof CdmBaseDatetimeDateTimeListSchema
>;
