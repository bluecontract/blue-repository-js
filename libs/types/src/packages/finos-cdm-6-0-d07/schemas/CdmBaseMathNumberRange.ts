import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathNumberBoundSchema } from './CdmBaseMathNumberBound';

export const CdmBaseMathNumberRangeSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/NumberRange']
)(
  z.object({
    description: z.string().optional(),
    lowerBound: z.lazy(() => CdmBaseMathNumberBoundSchema).optional(),
    name: z.string().optional(),
    upperBound: z.lazy(() => CdmBaseMathNumberBoundSchema).optional(),
  })
);

export type CdmBaseMathNumberRange = z.infer<
  typeof CdmBaseMathNumberRangeSchema
>;
