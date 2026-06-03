import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseDatetimeDateTimeListSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/DateTimeList']
)(
  zod.object({
    dateTime: zod.array(zod.string()).min(1).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmBaseDatetimeDateTimeList = z.infer<
  typeof CdmBaseDatetimeDateTimeListSchema
>;
