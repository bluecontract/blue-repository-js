import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseMathQuantifierEnumSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/QuantifierEnum']
)(
  z.enum(['All', 'Any'] as [string, ...string[]]) as unknown as z.ZodObject<any>
);

export type CdmBaseMathQuantifierEnum = z.infer<
  typeof CdmBaseMathQuantifierEnumSchema
>;
