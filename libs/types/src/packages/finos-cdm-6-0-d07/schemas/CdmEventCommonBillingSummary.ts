import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonRecordAmountTypeEnumSchema } from './CdmEventCommonRecordAmountTypeEnum';
import { CdmEventCommonTransferSchema } from './CdmEventCommonTransfer';

export const CdmEventCommonBillingSummarySchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/BillingSummary']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    summaryAmountType: z.lazy(() => CdmEventCommonRecordAmountTypeEnumSchema),
    summaryTransfer: z.lazy(() => CdmEventCommonTransferSchema).optional(),
  })
);

export type CdmEventCommonBillingSummary = z.infer<
  typeof CdmEventCommonBillingSummarySchema
>;
