import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathUnitTypeSchema } from './CdmBaseMathUnitType';

export const CdmBaseMathMeasureBaseSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/MeasureBase']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    unit: z.lazy(() => CdmBaseMathUnitTypeSchema).optional(),
    val: z.number().optional(),
  })
);

export type CdmBaseMathMeasureBase = z.infer<
  typeof CdmBaseMathMeasureBaseSchema
>;
