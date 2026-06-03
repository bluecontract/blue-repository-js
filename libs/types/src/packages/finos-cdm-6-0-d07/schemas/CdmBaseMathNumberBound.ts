import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseMathNumberBoundSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/NumberBound']
)(
  zod.object({
    description: zod.string().optional(),
    inclusive: zod.boolean(),
    name: zod.string().optional(),
    number: zod.number(),
  })
);

export type CdmBaseMathNumberBound = z.infer<
  typeof CdmBaseMathNumberBoundSchema
>;
