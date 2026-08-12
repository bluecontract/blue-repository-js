import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonRecordAmountTypeEnumSchema } from './CdmEventCommonRecordAmountTypeEnum';
import { CdmEventCommonTransferSchema } from './CdmEventCommonTransfer';

const zod = z as any;

export const CdmEventCommonBillingSummarySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/BillingSummary']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    summaryAmountType: zod.lazy(() => CdmEventCommonRecordAmountTypeEnumSchema),
    summaryTransfer: zod.lazy(() => CdmEventCommonTransferSchema).optional(),
  })
);

export type CdmEventCommonBillingSummary = z.infer<
  typeof CdmEventCommonBillingSummarySchema
>;
