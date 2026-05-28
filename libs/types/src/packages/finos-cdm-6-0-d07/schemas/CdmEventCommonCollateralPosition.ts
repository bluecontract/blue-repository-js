import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonCollateralStatusEnumSchema } from './CdmEventCommonCollateralStatusEnum';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTradeState';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableAssetPriceQuantitySchema } from './CdmObservableAssetPriceQuantity';
import { CdmProductCollateralCollateralTreatmentSchema } from './CdmProductCollateralCollateralTreatment';
import { CdmProductTemplateProductSchema } from './CdmProductTemplateProduct';

export const CdmEventCommonCollateralPositionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CollateralPosition']
  )(
    z.object({
      cashBalance: z.lazy(() => CdmObservableAssetMoneySchema).optional(),
      collateralPositionStatus: z
        .lazy(() => CdmEventCommonCollateralStatusEnumSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      priceQuantity: z
        .array(z.lazy(() => CdmObservableAssetPriceQuantitySchema))
        .min(1)
        .optional(),
      product: z
        .lazy((): z.ZodTypeAny => CdmProductTemplateProductSchema)
        .optional(),
      tradeReference: z
        .lazy(() => CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema)
        .optional(),
      treatment: z
        .lazy(() => CdmProductCollateralCollateralTreatmentSchema)
        .optional(),
    })
  );

export type CdmEventCommonCollateralPosition = z.infer<
  typeof CdmEventCommonCollateralPositionSchema
>;
