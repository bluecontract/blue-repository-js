import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetSchema } from './CdmBaseStaticdataAssetCommonAsset';
import { CdmObservableAssetBasketSchema } from './CdmObservableAssetBasket';
import { CdmObservableAssetIndexSchema } from './CdmObservableAssetIndex';

const zod = z as any;

export const CdmObservableAssetObservableSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/Observable']
)(
  zod.object({
    Asset: zod.lazy(() => CdmBaseStaticdataAssetCommonAssetSchema).optional(),
    Basket: zod
      .lazy((): z.ZodTypeAny => CdmObservableAssetBasketSchema)
      .optional(),
    description: zod.string().optional(),
    Index: zod.lazy(() => CdmObservableAssetIndexSchema).optional(),
    name: zod.string().optional(),
  })
);

export type CdmObservableAssetObservable = z.infer<
  typeof CdmObservableAssetObservableSchema
>;
