import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantitySchedule';
import { CdmBaseStaticdataAssetCommonAssetSchema } from './CdmBaseStaticdataAssetCommonAsset';
import { CdmObservableAssetBasketSchema } from './CdmObservableAssetBasket';
import { CdmObservableAssetIndexSchema } from './CdmObservableAssetIndex';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';

export const CdmObservableAssetBasketConstituentSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/BasketConstituent']
  )(
    z.object({
      Asset: z
        .lazy((): z.ZodTypeAny => CdmBaseStaticdataAssetCommonAssetSchema)
        .optional(),
      Basket: z
        .lazy((): z.ZodTypeAny => CdmObservableAssetBasketSchema)
        .optional(),
      description: z.string().optional(),
      finalValuationPrice: z
        .array(
          z.lazy(
            (): z.ZodTypeAny =>
              CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
          )
        )
        .min(0)
        .optional(),
      Index: z
        .lazy((): z.ZodTypeAny => CdmObservableAssetIndexSchema)
        .optional(),
      initialValuationPrice: z
        .array(
          z.lazy(
            (): z.ZodTypeAny =>
              CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
          )
        )
        .min(0)
        .optional(),
      interimValuationPrice: z
        .array(
          z.lazy(
            (): z.ZodTypeAny =>
              CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
          )
        )
        .min(0)
        .optional(),
      name: z.string().optional(),
      quantity: z
        .array(
          z.lazy(
            (): z.ZodTypeAny =>
              CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema
          )
        )
        .min(0)
        .optional(),
    })
  );

export type CdmObservableAssetBasketConstituent = z.infer<
  typeof CdmObservableAssetBasketConstituentSchema
>;
