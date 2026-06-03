import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathUnitTypeSchema } from './CdmBaseMathUnitType';

const zod = z as any;

export const CdmBaseMathMeasureBaseSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/MeasureBase']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    unit: zod.lazy(() => CdmBaseMathUnitTypeSchema).optional(),
    val: zod.number().optional(),
  })
);

export type CdmBaseMathMeasureBase = z.infer<
  typeof CdmBaseMathMeasureBaseSchema
>;
