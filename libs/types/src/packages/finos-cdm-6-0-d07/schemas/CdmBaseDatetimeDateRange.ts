import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseDatetimeDateRangeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/DateRange']
)(
  zod.object({
    description: zod.string().optional(),
    endDate: zod.string(),
    name: zod.string().optional(),
    startDate: zod.string(),
  })
);

export type CdmBaseDatetimeDateRange = z.infer<
  typeof CdmBaseDatetimeDateRangeSchema
>;
