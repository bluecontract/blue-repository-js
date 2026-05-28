import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseMathNumberBoundSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/NumberBound']
)(
  z.object({
    description: z.string().optional(),
    inclusive: z.boolean(),
    name: z.string().optional(),
    number: z.number(),
  })
);

export type CdmBaseMathNumberBound = z.infer<
  typeof CdmBaseMathNumberBoundSchema
>;
