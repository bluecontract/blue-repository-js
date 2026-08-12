import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCashPriceSchema } from './CdmObservableAssetCashPrice';
import { CdmObservableAssetPriceExpressionEnumSchema } from './CdmObservableAssetPriceExpressionEnum';
import { CdmProductCommonSettlementScheduledTransferEnumSchema } from './CdmProductCommonSettlementScheduledTransferEnum';

const zod = z as any;

export const CdmProductCommonSettlementCashflowTypeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/CashflowType']
)(
  zod.object({
    cashflowType: zod
      .lazy(() => CdmProductCommonSettlementScheduledTransferEnumSchema)
      .optional(),
    cashPrice: zod.lazy(() => CdmObservableAssetCashPriceSchema).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    priceExpression: zod
      .lazy(() => CdmObservableAssetPriceExpressionEnumSchema)
      .optional(),
  })
);

export type CdmProductCommonSettlementCashflowType = z.infer<
  typeof CdmProductCommonSettlementCashflowTypeSchema
>;
