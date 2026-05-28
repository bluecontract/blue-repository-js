import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseMathCompareOpSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/CompareOp']
)(
  z.enum([
    'Equals',
    'GreaterThan',
    'GreaterThanOrEquals',
    'LessThan',
    'LessThanOrEquals',
  ] as [string, ...string[]]) as unknown as z.ZodObject<any>
);

export type CdmBaseMathCompareOp = z.infer<typeof CdmBaseMathCompareOpSchema>;
