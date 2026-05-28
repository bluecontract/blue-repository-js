import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseMathNonNegativeStepSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/NonNegativeStep']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    stepDate: z.string(),
    stepValue: z.number(),
  })
);

export type CdmBaseMathNonNegativeStep = z.infer<
  typeof CdmBaseMathNonNegativeStepSchema
>;
