import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTradeState';
import { CdmEventCommonTransferSchema } from './CdmEventCommonTransfer';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

const zod = z as any;

export const CdmEventCommonBillingRecordSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/BillingRecord']
)(
  zod.object({
    description: zod.string().optional(),
    minimumFee: zod.lazy(() => CdmObservableAssetMoneySchema).optional(),
    name: zod.string().optional(),
    recordEndDate: zod.string(),
    recordStartDate: zod.string(),
    recordTransfer: zod.lazy(() => CdmEventCommonTransferSchema),
    tradeState: zod.lazy(
      () => CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema
    ),
  })
);

export type CdmEventCommonBillingRecord = z.infer<
  typeof CdmEventCommonBillingRecordSchema
>;
