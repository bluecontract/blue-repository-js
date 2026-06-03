import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMultipleDebtTypesSchema } from './CdmObservableAssetMultipleDebtTypes';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmObservableAssetCreditRatingDebtSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CreditRatingDebt']
)(
  zod.object({
    debtType: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    debtTypes: zod
      .lazy(() => CdmObservableAssetMultipleDebtTypesSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmObservableAssetCreditRatingDebt = z.infer<
  typeof CdmObservableAssetCreditRatingDebtSchema
>;
