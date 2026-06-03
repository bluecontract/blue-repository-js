import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathDatedValueSchema } from './CdmBaseMathDatedValue';
import { CdmBaseMathUnitTypeSchema } from './CdmBaseMathUnitType';

const zod = z as any;

export const CdmBaseMathMeasureScheduleSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/MeasureSchedule']
)(
  zod.object({
    datedValue: zod
      .array(zod.lazy(() => CdmBaseMathDatedValueSchema))
      .min(0)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    unit: zod.lazy(() => CdmBaseMathUnitTypeSchema).optional(),
    val: zod.number().optional(),
  })
);

export type CdmBaseMathMeasureSchedule = z.infer<
  typeof CdmBaseMathMeasureScheduleSchema
>;
