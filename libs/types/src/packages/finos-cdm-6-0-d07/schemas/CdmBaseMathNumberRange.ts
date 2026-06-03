import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathNumberBoundSchema } from './CdmBaseMathNumberBound';

const zod = z as any;

export const CdmBaseMathNumberRangeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/NumberRange']
)(
  zod.object({
    description: zod.string().optional(),
    lowerBound: zod.lazy(() => CdmBaseMathNumberBoundSchema).optional(),
    name: zod.string().optional(),
    upperBound: zod.lazy(() => CdmBaseMathNumberBoundSchema).optional(),
  })
);

export type CdmBaseMathNumberRange = z.infer<
  typeof CdmBaseMathNumberRangeSchema
>;
