import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathUnitTypeSchema } from './CdmBaseMathUnitType';

export const CdmBaseMathMeasureSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/Measure']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    unit: z.lazy(() => CdmBaseMathUnitTypeSchema).optional(),
    val: z.number().optional(),
  })
);

export type CdmBaseMathMeasure = z.infer<typeof CdmBaseMathMeasureSchema>;
