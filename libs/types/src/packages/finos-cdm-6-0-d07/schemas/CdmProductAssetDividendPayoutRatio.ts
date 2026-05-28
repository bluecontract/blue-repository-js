import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituentSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituent';

export const CdmProductAssetDividendPayoutRatioSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendPayoutRatio']
  )(
    z.object({
      basketConstituent: z
        .lazy(
          () =>
            CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituentSchema
        )
        .optional(),
      cashRatio: z.number().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      nonCashRatio: z.number().optional(),
      totalRatio: z.number(),
    })
  );

export type CdmProductAssetDividendPayoutRatio = z.infer<
  typeof CdmProductAssetDividendPayoutRatioSchema
>;
