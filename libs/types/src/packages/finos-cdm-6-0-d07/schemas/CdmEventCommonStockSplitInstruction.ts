import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventCommonStockSplitInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/StockSplitInstruction']
)(
  zod.object({
    adjustmentRatio: zod.number(),
    description: zod.string().optional(),
    effectiveDate: zod.string(),
    name: zod.string().optional(),
  })
);

export type CdmEventCommonStockSplitInstruction = z.infer<
  typeof CdmEventCommonStockSplitInstructionSchema
>;
