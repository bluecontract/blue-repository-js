import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeFrequencySchema } from './CdmBaseDatetimeFrequency';
import { CdmBaseMathDatedValueSchema } from './CdmBaseMathDatedValue';
import { CdmBaseMathMeasureSchema } from './CdmBaseMathMeasure';
import { CdmBaseMathUnitTypeSchema } from './CdmBaseMathUnitType';

const zod = z as any;

export const CdmBaseMathNonNegativeQuantitySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/NonNegativeQuantity']
)(
  zod.object({
    datedValue: zod
      .array(zod.lazy(() => CdmBaseMathDatedValueSchema))
      .min(0)
      .optional(),
    description: zod.string().optional(),
    frequency: zod.lazy(() => CdmBaseDatetimeFrequencySchema).optional(),
    multiplier: zod.lazy(() => CdmBaseMathMeasureSchema).optional(),
    name: zod.string().optional(),
    unit: zod.lazy(() => CdmBaseMathUnitTypeSchema).optional(),
    val: zod.number().optional(),
  })
);

export type CdmBaseMathNonNegativeQuantity = z.infer<
  typeof CdmBaseMathNonNegativeQuantitySchema
>;
