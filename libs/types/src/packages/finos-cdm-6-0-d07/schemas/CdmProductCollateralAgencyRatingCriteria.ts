import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCreditNotationSchema } from './CdmObservableAssetCreditNotation';
import { CdmObservableAssetCreditNotationBoundaryEnumSchema } from './CdmObservableAssetCreditNotationBoundaryEnum';
import { CdmObservableAssetCreditNotationMismatchResolutionEnumSchema } from './CdmObservableAssetCreditNotationMismatchResolutionEnum';
import { CdmObservableAssetCreditRatingAgencyEnumSchema } from './CdmObservableAssetCreditRatingAgencyEnum';

const zod = z as any;

export const CdmProductCollateralAgencyRatingCriteriaSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/AgencyRatingCriteria']
  )(
    zod.object({
      boundary: zod
        .lazy(() => CdmObservableAssetCreditNotationBoundaryEnumSchema)
        .optional(),
      creditNotation: zod.lazy(() => CdmObservableAssetCreditNotationSchema),
      description: zod.string().optional(),
      mismatchResolution: zod
        .lazy(
          () => CdmObservableAssetCreditNotationMismatchResolutionEnumSchema
        )
        .optional(),
      name: zod.string().optional(),
      referenceAgency: zod
        .lazy(() => CdmObservableAssetCreditRatingAgencyEnumSchema)
        .optional(),
    })
  );

export type CdmProductCollateralAgencyRatingCriteria = z.infer<
  typeof CdmProductCollateralAgencyRatingCriteriaSchema
>;
