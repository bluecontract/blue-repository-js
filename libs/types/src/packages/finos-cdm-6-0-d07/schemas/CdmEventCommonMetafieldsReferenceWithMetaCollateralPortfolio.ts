import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelLibMetaReferenceSchema } from './ComRosettaModelLibMetaReference';

const zod = z as any;

export const CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/event/common/metafields/ReferenceWithMetaCollateralPortfolio'
    ]
  )(
    zod.object({
      address: zod.lazy(() => ComRosettaModelLibMetaReferenceSchema).optional(),
      externalReference: zod.string().optional(),
      globalReference: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolio =
  z.infer<
    typeof CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema
  >;
