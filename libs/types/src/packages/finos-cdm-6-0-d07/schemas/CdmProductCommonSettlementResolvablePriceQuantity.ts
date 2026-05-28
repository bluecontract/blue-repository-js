import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantitySchedule';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';
import { CdmProductAssetFutureValueAmountSchema } from './CdmProductAssetFutureValueAmount';
import { CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantitySchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantity';
import { CdmProductCommonSettlementQuantityMultiplierSchema } from './CdmProductCommonSettlementQuantityMultiplier';

export const CdmProductCommonSettlementResolvablePriceQuantitySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/ResolvablePriceQuantity'
    ]
  )(
    z.object({
      description: z.string().optional(),
      futureValueNotional: z
        .lazy(() => CdmProductAssetFutureValueAmountSchema)
        .optional(),
      name: z.string().optional(),
      priceSchedule: z
        .array(
          z.lazy(
            () =>
              CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
          )
        )
        .min(0)
        .optional(),
      quantityMultiplier: z
        .lazy(() => CdmProductCommonSettlementQuantityMultiplierSchema)
        .optional(),
      quantityReference: z
        .lazy(
          () =>
            CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantitySchema
        )
        .optional(),
      quantitySchedule: z
        .lazy(
          () =>
            CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema
        )
        .optional(),
      reset: z.boolean().optional(),
      resolvedQuantity: z.lazy(() => CdmBaseMathQuantitySchema).optional(),
    })
  );

export type CdmProductCommonSettlementResolvablePriceQuantity = z.infer<
  typeof CdmProductCommonSettlementResolvablePriceQuantitySchema
>;
