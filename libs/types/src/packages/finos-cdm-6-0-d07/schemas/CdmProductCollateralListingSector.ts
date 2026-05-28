import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmProductCollateralListingSectorSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/ListingSector']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      sector: z
        .array(z.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
        .min(1)
        .optional(),
    })
  );

export type CdmProductCollateralListingSector = z.infer<
  typeof CdmProductCollateralListingSectorSchema
>;
