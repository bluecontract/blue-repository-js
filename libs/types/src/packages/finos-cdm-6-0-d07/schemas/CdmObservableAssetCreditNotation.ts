import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCreditRatingAgencyEnumSchema } from './CdmObservableAssetCreditRatingAgencyEnum';
import { CdmObservableAssetCreditRatingCreditWatchEnumSchema } from './CdmObservableAssetCreditRatingCreditWatchEnum';
import { CdmObservableAssetCreditRatingDebtSchema } from './CdmObservableAssetCreditRatingDebt';
import { CdmObservableAssetCreditRatingOutlookEnumSchema } from './CdmObservableAssetCreditRatingOutlookEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmObservableAssetCreditNotationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CreditNotation']
  )(
    z.object({
      agency: z.lazy(() => CdmObservableAssetCreditRatingAgencyEnumSchema),
      creditWatch: z
        .lazy(() => CdmObservableAssetCreditRatingCreditWatchEnumSchema)
        .optional(),
      debt: z.lazy(() => CdmObservableAssetCreditRatingDebtSchema).optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      notation: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      outlook: z
        .lazy(() => CdmObservableAssetCreditRatingOutlookEnumSchema)
        .optional(),
      scale: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema).optional(),
    })
  );

export type CdmObservableAssetCreditNotation = z.infer<
  typeof CdmObservableAssetCreditNotationSchema
>;
