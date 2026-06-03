import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonNotionalAdjustmentEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/NotionalAdjustmentEnum']
)(
  zod.enum(['Execution', 'PortfolioRebalancing', 'Standard'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmProductCommonNotionalAdjustmentEnum = z.infer<
  typeof CdmProductCommonNotionalAdjustmentEnumSchema
>;
