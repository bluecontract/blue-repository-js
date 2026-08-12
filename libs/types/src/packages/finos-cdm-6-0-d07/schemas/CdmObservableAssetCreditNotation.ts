import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCreditRatingAgencyEnumSchema } from './CdmObservableAssetCreditRatingAgencyEnum';
import { CdmObservableAssetCreditRatingCreditWatchEnumSchema } from './CdmObservableAssetCreditRatingCreditWatchEnum';
import { CdmObservableAssetCreditRatingDebtSchema } from './CdmObservableAssetCreditRatingDebt';
import { CdmObservableAssetCreditRatingOutlookEnumSchema } from './CdmObservableAssetCreditRatingOutlookEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmObservableAssetCreditNotationSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CreditNotation']
)(
  zod.object({
    agency: zod.lazy(() => CdmObservableAssetCreditRatingAgencyEnumSchema),
    creditWatch: zod
      .lazy(() => CdmObservableAssetCreditRatingCreditWatchEnumSchema)
      .optional(),
    debt: zod.lazy(() => CdmObservableAssetCreditRatingDebtSchema).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    notation: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
    outlook: zod
      .lazy(() => CdmObservableAssetCreditRatingOutlookEnumSchema)
      .optional(),
    scale: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema).optional(),
  })
);

export type CdmObservableAssetCreditNotation = z.infer<
  typeof CdmObservableAssetCreditNotationSchema
>;
