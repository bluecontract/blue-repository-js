import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseMathCompareOpSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/CompareOp']
)(
  zod.enum([
    'Equals',
    'GreaterThan',
    'GreaterThanOrEquals',
    'LessThan',
    'LessThanOrEquals',
  ] as [string, ...string[]]) as unknown as z.ZodObject<any>
);

export type CdmBaseMathCompareOp = z.infer<typeof CdmBaseMathCompareOpSchema>;
