import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathAveragingCalculationMethodEnumSchema } from './CdmBaseMathAveragingCalculationMethodEnum';

export const CdmBaseMathAveragingCalculationMethodSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/math/AveragingCalculationMethod']
  )(
    z.object({
      calculationMethod: z.lazy(
        () => CdmBaseMathAveragingCalculationMethodEnumSchema
      ),
      description: z.string().optional(),
      isWeighted: z.boolean(),
      name: z.string().optional(),
    })
  );

export type CdmBaseMathAveragingCalculationMethod = z.infer<
  typeof CdmBaseMathAveragingCalculationMethodSchema
>;
