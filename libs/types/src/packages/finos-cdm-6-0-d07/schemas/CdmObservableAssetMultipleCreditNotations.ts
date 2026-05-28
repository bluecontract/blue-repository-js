import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantifierEnumSchema } from './CdmBaseMathQuantifierEnum';
import { CdmObservableAssetCreditNotationMismatchResolutionEnumSchema } from './CdmObservableAssetCreditNotationMismatchResolutionEnum';
import { CdmObservableAssetCreditRatingAgencyEnumSchema } from './CdmObservableAssetCreditRatingAgencyEnum';
import { CdmObservableAssetFieldWithMetaCreditNotationSchema } from './CdmObservableAssetFieldWithMetaCreditNotation';

export const CdmObservableAssetMultipleCreditNotationsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/MultipleCreditNotations']
  )(
    z.object({
      condition: z.lazy(() => CdmBaseMathQuantifierEnumSchema),
      creditNotation: z
        .array(
          z.lazy(() => CdmObservableAssetFieldWithMetaCreditNotationSchema)
        )
        .min(2)
        .optional(),
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

export type CdmObservableAssetMultipleCreditNotations = z.infer<
  typeof CdmObservableAssetMultipleCreditNotationsSchema
>;
