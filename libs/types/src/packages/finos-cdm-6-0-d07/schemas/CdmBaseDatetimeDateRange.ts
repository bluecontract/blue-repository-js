import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseDatetimeDateRangeSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/DateRange']
)(
  z.object({
    description: z.string().optional(),
    endDate: z.string(),
    name: z.string().optional(),
    startDate: z.string(),
  })
);

export type CdmBaseDatetimeDateRange = z.infer<
  typeof CdmBaseDatetimeDateRangeSchema
>;
