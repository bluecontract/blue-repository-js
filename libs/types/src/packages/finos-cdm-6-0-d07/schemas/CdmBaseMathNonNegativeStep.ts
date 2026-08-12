import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseMathNonNegativeStepSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/NonNegativeStep']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    stepDate: zod.string(),
    stepValue: zod.number(),
  })
);

export type CdmBaseMathNonNegativeStep = z.infer<
  typeof CdmBaseMathNonNegativeStepSchema
>;
