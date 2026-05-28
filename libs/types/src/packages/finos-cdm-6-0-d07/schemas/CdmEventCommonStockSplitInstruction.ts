import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonStockSplitInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/StockSplitInstruction']
  )(
    z.object({
      adjustmentRatio: z.number(),
      description: z.string().optional(),
      effectiveDate: z.string(),
      name: z.string().optional(),
    })
  );

export type CdmEventCommonStockSplitInstruction = z.infer<
  typeof CdmEventCommonStockSplitInstructionSchema
>;
