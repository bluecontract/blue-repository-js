import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseMathQuantityChangeDirectionEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/QuantityChangeDirectionEnum']
)(
  zod.enum(['Decrease', 'Increase', 'Replace'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmBaseMathQuantityChangeDirectionEnum = z.infer<
  typeof CdmBaseMathQuantityChangeDirectionEnumSchema
>;
