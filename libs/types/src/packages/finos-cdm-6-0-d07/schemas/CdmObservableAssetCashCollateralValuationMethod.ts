import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCsaTypeEnumSchema } from './CdmObservableAssetCsaTypeEnum';
import { CdmObservableAssetPartyDeterminationEnumSchema } from './CdmObservableAssetPartyDeterminationEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmObservableAssetCashCollateralValuationMethodSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/CashCollateralValuationMethod'
    ]
  )(
    z.object({
      agreedDiscountRate: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      applicableCsa: z
        .lazy(() => CdmObservableAssetCsaTypeEnumSchema)
        .optional(),
      cashCollateralCurrency: z.string().optional(),
      cashCollateralInterestRate: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      prescribedDocumentationAdjustment: z.boolean().optional(),
      protectedParty: z
        .array(z.lazy(() => CdmObservableAssetPartyDeterminationEnumSchema))
        .min(0)
        .max(2)
        .optional(),
    })
  );

export type CdmObservableAssetCashCollateralValuationMethod = z.infer<
  typeof CdmObservableAssetCashCollateralValuationMethodSchema
>;
