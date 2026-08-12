import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonRecordAmountTypeEnumSchema } from './CdmEventCommonRecordAmountTypeEnum';

const zod = z as any;

export const CdmEventCommonBillingSummaryInstructionSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/BillingSummaryInstruction']
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      summaryAmountType: zod.lazy(
        () => CdmEventCommonRecordAmountTypeEnumSchema
      ),
    })
  );

export type CdmEventCommonBillingSummaryInstruction = z.infer<
  typeof CdmEventCommonBillingSummaryInstructionSchema
>;
