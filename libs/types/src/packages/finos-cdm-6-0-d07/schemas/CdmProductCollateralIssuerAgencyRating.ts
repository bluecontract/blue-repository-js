import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralAgencyRatingCriteriaSchema } from './CdmProductCollateralAgencyRatingCriteria';

export const CdmProductCollateralIssuerAgencyRatingSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/IssuerAgencyRating']
  )(
    z.object({
      issuerAgencyRating: z.lazy(
        () => CdmProductCollateralAgencyRatingCriteriaSchema
      ),
      name: z.string().optional(),
    })
  );

export type CdmProductCollateralIssuerAgencyRating = z.infer<
  typeof CdmProductCollateralIssuerAgencyRatingSchema
>;
