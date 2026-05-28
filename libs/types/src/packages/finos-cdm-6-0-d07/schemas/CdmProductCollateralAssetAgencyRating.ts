import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralAgencyRatingCriteriaSchema } from './CdmProductCollateralAgencyRatingCriteria';

export const CdmProductCollateralAssetAgencyRatingSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/AssetAgencyRating']
  )(
    z.object({
      assetAgencyRating: z.lazy(
        () => CdmProductCollateralAgencyRatingCriteriaSchema
      ),
      name: z.string().optional(),
    })
  );

export type CdmProductCollateralAssetAgencyRating = z.infer<
  typeof CdmProductCollateralAssetAgencyRatingSchema
>;
