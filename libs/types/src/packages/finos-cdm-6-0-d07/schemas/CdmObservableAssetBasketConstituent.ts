import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantitySchedule';
import { CdmBaseStaticdataAssetCommonAssetSchema } from './CdmBaseStaticdataAssetCommonAsset';
import { CdmObservableAssetBasketSchema } from './CdmObservableAssetBasket';
import { CdmObservableAssetIndexSchema } from './CdmObservableAssetIndex';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';

const zod = z as any;

export const CdmObservableAssetBasketConstituentSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/BasketConstituent']
)(
  zod.object({
    Asset: zod
      .lazy((): z.ZodTypeAny => CdmBaseStaticdataAssetCommonAssetSchema)
      .optional(),
    Basket: zod
      .lazy((): z.ZodTypeAny => CdmObservableAssetBasketSchema)
      .optional(),
    description: zod.string().optional(),
    finalValuationPrice: zod
      .array(
        zod.lazy(
          (): z.ZodTypeAny =>
            CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
        )
      )
      .min(0)
      .optional(),
    Index: zod
      .lazy((): z.ZodTypeAny => CdmObservableAssetIndexSchema)
      .optional(),
    initialValuationPrice: zod
      .array(
        zod.lazy(
          (): z.ZodTypeAny =>
            CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
        )
      )
      .min(0)
      .optional(),
    interimValuationPrice: zod
      .array(
        zod.lazy(
          (): z.ZodTypeAny =>
            CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
        )
      )
      .min(0)
      .optional(),
    name: zod.string().optional(),
    quantity: zod
      .array(
        zod.lazy(
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
