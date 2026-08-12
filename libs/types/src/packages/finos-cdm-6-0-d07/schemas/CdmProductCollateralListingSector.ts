import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmProductCollateralListingSectorSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/ListingSector']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    sector: zod
      .array(zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
      .min(1)
      .optional(),
  })
);

export type CdmProductCollateralListingSector = z.infer<
  typeof CdmProductCollateralListingSectorSchema
>;
