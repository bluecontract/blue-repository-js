import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonCollateralStatusEnumSchema } from './CdmEventCommonCollateralStatusEnum';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTradeState';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableAssetPriceQuantitySchema } from './CdmObservableAssetPriceQuantity';
import { CdmProductCollateralCollateralTreatmentSchema } from './CdmProductCollateralCollateralTreatment';
import { CdmProductTemplateProductSchema } from './CdmProductTemplateProduct';

const zod = z as any;

export const CdmEventCommonCollateralPositionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CollateralPosition']
)(
  zod.object({
    cashBalance: zod.lazy(() => CdmObservableAssetMoneySchema).optional(),
    collateralPositionStatus: zod
      .lazy(() => CdmEventCommonCollateralStatusEnumSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    priceQuantity: zod
      .array(zod.lazy(() => CdmObservableAssetPriceQuantitySchema))
      .min(1)
      .optional(),
    product: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateProductSchema)
      .optional(),
    tradeReference: zod
      .lazy(() => CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema)
      .optional(),
    treatment: zod
      .lazy(() => CdmProductCollateralCollateralTreatmentSchema)
      .optional(),
  })
);

export type CdmEventCommonCollateralPosition = z.infer<
  typeof CdmEventCommonCollateralPositionSchema
>;
