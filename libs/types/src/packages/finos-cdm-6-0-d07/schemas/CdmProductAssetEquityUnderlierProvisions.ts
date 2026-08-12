import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmProductAssetEquityUnderlierProvisionsSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/EquityUnderlierProvisions']
  )(
    zod.object({
      componentSecurityIndexAnnexFallback: zod.boolean().optional(),
      localJurisdiction: zod
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      multipleExchangeIndexAnnexFallback: zod.boolean().optional(),
      name: zod.string().optional(),
      relevantJurisdiction: zod
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
    })
  );

export type CdmProductAssetEquityUnderlierProvisions = z.infer<
  typeof CdmProductAssetEquityUnderlierProvisionsSchema
>;
