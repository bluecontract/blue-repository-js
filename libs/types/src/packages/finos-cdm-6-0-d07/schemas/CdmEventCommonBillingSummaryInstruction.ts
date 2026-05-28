import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonRecordAmountTypeEnumSchema } from './CdmEventCommonRecordAmountTypeEnum';

export const CdmEventCommonBillingSummaryInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/BillingSummaryInstruction']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      summaryAmountType: z.lazy(() => CdmEventCommonRecordAmountTypeEnumSchema),
    })
  );

export type CdmEventCommonBillingSummaryInstruction = z.infer<
  typeof CdmEventCommonBillingSummaryInstructionSchema
>;
