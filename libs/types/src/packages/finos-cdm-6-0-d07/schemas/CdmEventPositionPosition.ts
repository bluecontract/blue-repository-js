import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTradeState';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableAssetPriceQuantitySchema } from './CdmObservableAssetPriceQuantity';
import { CdmProductTemplateProductSchema } from './CdmProductTemplateProduct';

export const CdmEventPositionPositionSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/position/Position']
)(
  z.object({
    cashBalance: z.lazy(() => CdmObservableAssetMoneySchema).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    priceQuantity: z
      .array(z.lazy(() => CdmObservableAssetPriceQuantitySchema))
      .min(1)
      .optional(),
    product: z.lazy((): z.ZodTypeAny => CdmProductTemplateProductSchema),
    tradeReference: z
      .lazy(() => CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema)
      .optional(),
  })
);

export type CdmEventPositionPosition = z.infer<
  typeof CdmEventPositionPositionSchema
>;
