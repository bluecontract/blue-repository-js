import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseDatetimeDateListSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/DateList']
)(
  zod.object({
    date: zod.array(zod.string()).min(1).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmBaseDatetimeDateList = z.infer<
  typeof CdmBaseDatetimeDateListSchema
>;
