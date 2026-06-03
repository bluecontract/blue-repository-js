import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseMathFinancialUnitEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/FinancialUnitEnum']
)(
  zod.enum([
    'Contract',
    'ContractualProduct',
    'IndexUnit',
    'LogNormalVolatility',
    'Share',
    'ValuePerDay',
    'ValuePerPercent',
    'Weight',
  ] as [string, ...string[]]) as unknown as z.ZodObject<any>
);

export type CdmBaseMathFinancialUnitEnum = z.infer<
  typeof CdmBaseMathFinancialUnitEnumSchema
>;
