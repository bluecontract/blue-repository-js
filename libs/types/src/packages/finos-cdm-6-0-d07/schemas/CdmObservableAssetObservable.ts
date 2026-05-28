import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetSchema } from './CdmBaseStaticdataAssetCommonAsset';
import { CdmObservableAssetBasketSchema } from './CdmObservableAssetBasket';
import { CdmObservableAssetIndexSchema } from './CdmObservableAssetIndex';

export const CdmObservableAssetObservableSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/Observable']
)(
  z.object({
    Asset: z.lazy(() => CdmBaseStaticdataAssetCommonAssetSchema).optional(),
    Basket: z
      .lazy((): z.ZodTypeAny => CdmObservableAssetBasketSchema)
      .optional(),
    description: z.string().optional(),
    Index: z.lazy(() => CdmObservableAssetIndexSchema).optional(),
    name: z.string().optional(),
  })
);

export type CdmObservableAssetObservable = z.infer<
  typeof CdmObservableAssetObservableSchema
>;
