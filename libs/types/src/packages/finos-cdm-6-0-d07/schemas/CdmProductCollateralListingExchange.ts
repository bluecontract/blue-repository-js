import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmProductCollateralListingExchangeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/ListingExchange']
  )(
    z.object({
      description: z.string().optional(),
      exchange: z
        .array(z.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
        .min(1)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCollateralListingExchange = z.infer<
  typeof CdmProductCollateralListingExchangeSchema
>;
