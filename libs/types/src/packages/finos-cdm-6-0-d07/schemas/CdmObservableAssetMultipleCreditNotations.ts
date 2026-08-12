import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantifierEnumSchema } from './CdmBaseMathQuantifierEnum';
import { CdmObservableAssetCreditNotationMismatchResolutionEnumSchema } from './CdmObservableAssetCreditNotationMismatchResolutionEnum';
import { CdmObservableAssetCreditRatingAgencyEnumSchema } from './CdmObservableAssetCreditRatingAgencyEnum';
import { CdmObservableAssetFieldWithMetaCreditNotationSchema } from './CdmObservableAssetFieldWithMetaCreditNotation';

const zod = z as any;

export const CdmObservableAssetMultipleCreditNotationsSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/MultipleCreditNotations']
  )(
    zod.object({
      condition: zod.lazy(() => CdmBaseMathQuantifierEnumSchema),
      creditNotation: zod
        .array(
          zod.lazy(() => CdmObservableAssetFieldWithMetaCreditNotationSchema)
        )
        .min(2)
        .optional(),
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

export type CdmObservableAssetMultipleCreditNotations = z.infer<
  typeof CdmObservableAssetMultipleCreditNotationsSchema
>;
