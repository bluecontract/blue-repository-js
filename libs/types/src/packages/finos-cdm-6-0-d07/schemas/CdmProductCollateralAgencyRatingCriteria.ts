import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCreditNotationSchema } from './CdmObservableAssetCreditNotation';
import { CdmObservableAssetCreditNotationBoundaryEnumSchema } from './CdmObservableAssetCreditNotationBoundaryEnum';
import { CdmObservableAssetCreditNotationMismatchResolutionEnumSchema } from './CdmObservableAssetCreditNotationMismatchResolutionEnum';
import { CdmObservableAssetCreditRatingAgencyEnumSchema } from './CdmObservableAssetCreditRatingAgencyEnum';

export const CdmProductCollateralAgencyRatingCriteriaSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/AgencyRatingCriteria']
  )(
    z.object({
      boundary: z
        .lazy(() => CdmObservableAssetCreditNotationBoundaryEnumSchema)
        .optional(),
      creditNotation: z.lazy(() => CdmObservableAssetCreditNotationSchema),
      description: z.string().optional(),
      mismatchResolution: z
        .lazy(
          () => CdmObservableAssetCreditNotationMismatchResolutionEnumSchema
        )
        .optional(),
      name: z.string().optional(),
      referenceAgency: z
        .lazy(() => CdmObservableAssetCreditRatingAgencyEnumSchema)
        .optional(),
    })
  );

export type CdmProductCollateralAgencyRatingCriteria = z.infer<
  typeof CdmProductCollateralAgencyRatingCriteriaSchema
>;
