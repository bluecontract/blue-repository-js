import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseMathDatedValueSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/DatedValue']
)(
  zod.object({
    date: zod.string(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    val: zod.number(),
  })
);

export type CdmBaseMathDatedValue = z.infer<typeof CdmBaseMathDatedValueSchema>;
