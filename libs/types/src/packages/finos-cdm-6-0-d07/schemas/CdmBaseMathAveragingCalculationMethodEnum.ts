import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseMathAveragingCalculationMethodEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/math/AveragingCalculationMethodEnum']
  )(
    z.enum(['Arithmetic', 'Geometric', 'Harmonic'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseMathAveragingCalculationMethodEnum = z.infer<
  typeof CdmBaseMathAveragingCalculationMethodEnumSchema
>;
