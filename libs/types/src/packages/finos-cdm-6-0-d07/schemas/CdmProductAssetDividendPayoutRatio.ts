import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituentSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituent';

const zod = z as any;

export const CdmProductAssetDividendPayoutRatioSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendPayoutRatio']
)(
  zod.object({
    basketConstituent: zod
      .lazy(
        () =>
          CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituentSchema
      )
      .optional(),
    cashRatio: zod.number().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    nonCashRatio: zod.number().optional(),
    totalRatio: zod.number(),
  })
);

export type CdmProductAssetDividendPayoutRatio = z.infer<
  typeof CdmProductAssetDividendPayoutRatioSchema
>;
