import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmProductCollateralListingExchangeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/ListingExchange']
)(
  zod.object({
    description: zod.string().optional(),
    exchange: zod
      .array(zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
      .min(1)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductCollateralListingExchange = z.infer<
  typeof CdmProductCollateralListingExchangeSchema
>;
