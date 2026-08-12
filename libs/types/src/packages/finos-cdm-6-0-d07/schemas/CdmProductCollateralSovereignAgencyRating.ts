import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralAgencyRatingCriteriaSchema } from './CdmProductCollateralAgencyRatingCriteria';

const zod = z as any;

export const CdmProductCollateralSovereignAgencyRatingSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/SovereignAgencyRating']
  )(
    zod.object({
      name: zod.string().optional(),
      sovereignAgencyRating: zod.lazy(
        () => CdmProductCollateralAgencyRatingCriteriaSchema
      ),
    })
  );

export type CdmProductCollateralSovereignAgencyRating = z.infer<
  typeof CdmProductCollateralSovereignAgencyRatingSchema
>;
