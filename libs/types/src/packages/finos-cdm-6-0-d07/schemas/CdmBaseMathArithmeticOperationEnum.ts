import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseMathArithmeticOperationEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/math/ArithmeticOperationEnum']
  )(
    z.enum(['Add', 'Divide', 'Max', 'Min', 'Multiply', 'Subtract'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseMathArithmeticOperationEnum = z.infer<
  typeof CdmBaseMathArithmeticOperationEnumSchema
>;
