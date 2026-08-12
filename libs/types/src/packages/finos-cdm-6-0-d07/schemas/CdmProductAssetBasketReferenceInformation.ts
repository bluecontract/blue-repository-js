import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetReferencePoolSchema } from './CdmProductAssetReferencePool';
import { CdmProductAssetTrancheSchema } from './CdmProductAssetTranche';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmProductAssetBasketReferenceInformationSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/BasketReferenceInformation']
  )(
    zod.object({
      basketId: zod
        .array(zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
        .min(0)
        .optional(),
      basketName: zod
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      description: zod.string().optional(),
      mthToDefault: zod.number().optional(),
      name: zod.string().optional(),
      nthToDefault: zod.number().optional(),
      referencePool: zod.lazy(() => CdmProductAssetReferencePoolSchema),
      tranche: zod.lazy(() => CdmProductAssetTrancheSchema).optional(),
    })
  );

export type CdmProductAssetBasketReferenceInformation = z.infer<
  typeof CdmProductAssetBasketReferenceInformationSchema
>;
