import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetReferencePoolSchema } from './CdmProductAssetReferencePool';
import { CdmProductAssetTrancheSchema } from './CdmProductAssetTranche';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmProductAssetBasketReferenceInformationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/BasketReferenceInformation']
  )(
    z.object({
      basketId: z
        .array(z.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
        .min(0)
        .optional(),
      basketName: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      description: z.string().optional(),
      mthToDefault: z.number().optional(),
      name: z.string().optional(),
      nthToDefault: z.number().optional(),
      referencePool: z.lazy(() => CdmProductAssetReferencePoolSchema),
      tranche: z.lazy(() => CdmProductAssetTrancheSchema).optional(),
    })
  );

export type CdmProductAssetBasketReferenceInformation = z.infer<
  typeof CdmProductAssetBasketReferenceInformationSchema
>;
