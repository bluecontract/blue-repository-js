import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralAgencyRatingCriteriaSchema } from './CdmProductCollateralAgencyRatingCriteria';

export const CdmProductCollateralSovereignAgencyRatingSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/SovereignAgencyRating']
  )(
    z.object({
      name: z.string().optional(),
      sovereignAgencyRating: z.lazy(
        () => CdmProductCollateralAgencyRatingCriteriaSchema
      ),
    })
  );

export type CdmProductCollateralSovereignAgencyRating = z.infer<
  typeof CdmProductCollateralSovereignAgencyRatingSchema
>;
