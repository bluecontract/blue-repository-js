import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCashPriceSchema } from './CdmObservableAssetCashPrice';
import { CdmObservableAssetPriceExpressionEnumSchema } from './CdmObservableAssetPriceExpressionEnum';
import { CdmProductCommonSettlementScheduledTransferEnumSchema } from './CdmProductCommonSettlementScheduledTransferEnum';

export const CdmProductCommonSettlementCashflowTypeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/CashflowType']
  )(
    z.object({
      cashflowType: z
        .lazy(() => CdmProductCommonSettlementScheduledTransferEnumSchema)
        .optional(),
      cashPrice: z.lazy(() => CdmObservableAssetCashPriceSchema).optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      priceExpression: z
        .lazy(() => CdmObservableAssetPriceExpressionEnumSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementCashflowType = z.infer<
  typeof CdmProductCommonSettlementCashflowTypeSchema
>;
