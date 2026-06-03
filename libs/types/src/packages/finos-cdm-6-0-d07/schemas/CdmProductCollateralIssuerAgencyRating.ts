import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralAgencyRatingCriteriaSchema } from './CdmProductCollateralAgencyRatingCriteria';

const zod = z as any;

export const CdmProductCollateralIssuerAgencyRatingSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/IssuerAgencyRating']
)(
  zod.object({
    issuerAgencyRating: zod.lazy(
      () => CdmProductCollateralAgencyRatingCriteriaSchema
    ),
    name: zod.string().optional(),
  })
);

export type CdmProductCollateralIssuerAgencyRating = z.infer<
  typeof CdmProductCollateralIssuerAgencyRatingSchema
>;
