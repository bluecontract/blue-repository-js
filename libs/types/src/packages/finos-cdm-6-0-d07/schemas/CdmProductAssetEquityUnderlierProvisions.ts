import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmProductAssetEquityUnderlierProvisionsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/EquityUnderlierProvisions']
  )(
    z.object({
      componentSecurityIndexAnnexFallback: z.boolean().optional(),
      localJurisdiction: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      multipleExchangeIndexAnnexFallback: z.boolean().optional(),
      name: z.string().optional(),
      relevantJurisdiction: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
    })
  );

export type CdmProductAssetEquityUnderlierProvisions = z.infer<
  typeof CdmProductAssetEquityUnderlierProvisionsSchema
>;
