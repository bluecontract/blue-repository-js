import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTradeState';
import { CdmEventCommonTransferSchema } from './CdmEventCommonTransfer';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

export const CdmEventCommonBillingRecordSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/BillingRecord']
)(
  z.object({
    description: z.string().optional(),
    minimumFee: z.lazy(() => CdmObservableAssetMoneySchema).optional(),
    name: z.string().optional(),
    recordEndDate: z.string(),
    recordStartDate: z.string(),
    recordTransfer: z.lazy(() => CdmEventCommonTransferSchema),
    tradeState: z.lazy(
      () => CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema
    ),
  })
);

export type CdmEventCommonBillingRecord = z.infer<
  typeof CdmEventCommonBillingRecordSchema
>;
