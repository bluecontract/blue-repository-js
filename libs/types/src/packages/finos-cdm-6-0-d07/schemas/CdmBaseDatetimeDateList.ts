import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseDatetimeDateListSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/DateList']
)(
  z.object({
    date: z.array(z.string()).min(1).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type CdmBaseDatetimeDateList = z.infer<
  typeof CdmBaseDatetimeDateListSchema
>;
