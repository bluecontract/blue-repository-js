import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCollateralAgencyRatingCriteriaSchema } from './CdmProductCollateralAgencyRatingCriteria';

const zod = z as any;

export const CdmProductCollateralAssetAgencyRatingSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/AssetAgencyRating']
)(
  zod.object({
    assetAgencyRating: zod.lazy(
      () => CdmProductCollateralAgencyRatingCriteriaSchema
    ),
    name: zod.string().optional(),
  })
);

export type CdmProductCollateralAssetAgencyRating = z.infer<
  typeof CdmProductCollateralAssetAgencyRatingSchema
>;
