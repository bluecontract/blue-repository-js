import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathDatedValueSchema } from './CdmBaseMathDatedValue';
import { CdmBaseMathUnitTypeSchema } from './CdmBaseMathUnitType';

export const CdmBaseMathMeasureScheduleSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/MeasureSchedule']
)(
  z.object({
    datedValue: z
      .array(z.lazy(() => CdmBaseMathDatedValueSchema))
      .min(0)
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    unit: z.lazy(() => CdmBaseMathUnitTypeSchema).optional(),
    val: z.number().optional(),
  })
);

export type CdmBaseMathMeasureSchedule = z.infer<
  typeof CdmBaseMathMeasureScheduleSchema
>;
