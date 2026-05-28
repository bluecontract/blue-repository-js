import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathRoundingDirectionEnumSchema } from './CdmBaseMathRoundingDirectionEnum';

export const CdmBaseMathRoundingSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/Rounding']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    precision: z.number().optional(),
    roundingDirection: z.lazy(() => CdmBaseMathRoundingDirectionEnumSchema),
  })
);

export type CdmBaseMathRounding = z.infer<typeof CdmBaseMathRoundingSchema>;
