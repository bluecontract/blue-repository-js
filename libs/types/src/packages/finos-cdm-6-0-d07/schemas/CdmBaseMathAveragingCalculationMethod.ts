import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathAveragingCalculationMethodEnumSchema } from './CdmBaseMathAveragingCalculationMethodEnum';

const zod = z as any;

export const CdmBaseMathAveragingCalculationMethodSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/AveragingCalculationMethod']
)(
  zod.object({
    calculationMethod: zod.lazy(
      () => CdmBaseMathAveragingCalculationMethodEnumSchema
    ),
    description: zod.string().optional(),
    isWeighted: zod.boolean(),
    name: zod.string().optional(),
  })
);

export type CdmBaseMathAveragingCalculationMethod = z.infer<
  typeof CdmBaseMathAveragingCalculationMethodSchema
>;
