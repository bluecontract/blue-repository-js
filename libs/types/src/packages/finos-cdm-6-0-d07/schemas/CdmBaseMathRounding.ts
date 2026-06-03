import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathRoundingDirectionEnumSchema } from './CdmBaseMathRoundingDirectionEnum';

const zod = z as any;

export const CdmBaseMathRoundingSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/Rounding']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    precision: zod.number().optional(),
    roundingDirection: zod.lazy(() => CdmBaseMathRoundingDirectionEnumSchema),
  })
);

export type CdmBaseMathRounding = z.infer<typeof CdmBaseMathRoundingSchema>;
