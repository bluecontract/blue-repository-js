import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseMathAveragingCalculationMethodEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/math/AveragingCalculationMethodEnum']
  )(
    zod.enum(['Arithmetic', 'Geometric', 'Harmonic'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseMathAveragingCalculationMethodEnum = z.infer<
  typeof CdmBaseMathAveragingCalculationMethodEnumSchema
>;
