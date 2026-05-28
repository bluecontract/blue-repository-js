import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseMathDatedValueSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/DatedValue']
)(
  z.object({
    date: z.string(),
    description: z.string().optional(),
    name: z.string().optional(),
    val: z.number(),
  })
);

export type CdmBaseMathDatedValue = z.infer<typeof CdmBaseMathDatedValueSchema>;
