import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseMathQuantifierEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/QuantifierEnum']
)(
  zod.enum(['All', 'Any'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmBaseMathQuantifierEnum = z.infer<
  typeof CdmBaseMathQuantifierEnumSchema
>;
