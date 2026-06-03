import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantitySchedule';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';
import { CdmProductAssetFutureValueAmountSchema } from './CdmProductAssetFutureValueAmount';
import { CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantitySchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantity';
import { CdmProductCommonSettlementQuantityMultiplierSchema } from './CdmProductCommonSettlementQuantityMultiplier';

const zod = z as any;

export const CdmProductCommonSettlementResolvablePriceQuantitySchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/ResolvablePriceQuantity'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      futureValueNotional: zod
        .lazy(() => CdmProductAssetFutureValueAmountSchema)
        .optional(),
      name: zod.string().optional(),
      priceSchedule: zod
        .array(
          zod.lazy(
            () =>
              CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
          )
        )
        .min(0)
        .optional(),
      quantityMultiplier: zod
        .lazy(() => CdmProductCommonSettlementQuantityMultiplierSchema)
        .optional(),
      quantityReference: zod
        .lazy(
          () =>
            CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantitySchema
        )
        .optional(),
      quantitySchedule: zod
        .lazy(
          () =>
            CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema
        )
        .optional(),
      reset: zod.boolean().optional(),
      resolvedQuantity: zod.lazy(() => CdmBaseMathQuantitySchema).optional(),
    })
  );

export type CdmProductCommonSettlementResolvablePriceQuantity = z.infer<
  typeof CdmProductCommonSettlementResolvablePriceQuantitySchema
>;
