import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonNotionalAdjustmentEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/NotionalAdjustmentEnum']
  )(
    z.enum(['Execution', 'PortfolioRebalancing', 'Standard'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCommonNotionalAdjustmentEnum = z.infer<
  typeof CdmProductCommonNotionalAdjustmentEnumSchema
>;
