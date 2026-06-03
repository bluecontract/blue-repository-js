import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTradeState';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableAssetPriceQuantitySchema } from './CdmObservableAssetPriceQuantity';
import { CdmProductTemplateProductSchema } from './CdmProductTemplateProduct';

const zod = z as any;

export const CdmEventPositionPositionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/position/Position']
)(
  zod.object({
    cashBalance: zod.lazy(() => CdmObservableAssetMoneySchema).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    priceQuantity: zod
      .array(zod.lazy(() => CdmObservableAssetPriceQuantitySchema))
      .min(1)
      .optional(),
    product: zod.lazy((): z.ZodTypeAny => CdmProductTemplateProductSchema),
    tradeReference: zod
      .lazy(() => CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema)
      .optional(),
  })
);

export type CdmEventPositionPosition = z.infer<
  typeof CdmEventPositionPositionSchema
>;
