import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMultipleDebtTypesSchema } from './CdmObservableAssetMultipleDebtTypes';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmObservableAssetCreditRatingDebtSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CreditRatingDebt']
  )(
    z.object({
      debtType: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      debtTypes: z
        .lazy(() => CdmObservableAssetMultipleDebtTypesSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmObservableAssetCreditRatingDebt = z.infer<
  typeof CdmObservableAssetCreditRatingDebtSchema
>;
