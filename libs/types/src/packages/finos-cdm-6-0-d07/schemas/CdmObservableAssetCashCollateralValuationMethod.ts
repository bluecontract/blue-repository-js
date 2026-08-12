import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCsaTypeEnumSchema } from './CdmObservableAssetCsaTypeEnum';
import { CdmObservableAssetPartyDeterminationEnumSchema } from './CdmObservableAssetPartyDeterminationEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmObservableAssetCashCollateralValuationMethodSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/CashCollateralValuationMethod'
    ]
  )(
    zod.object({
      agreedDiscountRate: zod
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      applicableCsa: zod
        .lazy(() => CdmObservableAssetCsaTypeEnumSchema)
        .optional(),
      cashCollateralCurrency: zod.string().optional(),
      cashCollateralInterestRate: zod
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      prescribedDocumentationAdjustment: zod.boolean().optional(),
      protectedParty: zod
        .array(zod.lazy(() => CdmObservableAssetPartyDeterminationEnumSchema))
        .min(0)
        .max(2)
        .optional(),
    })
  );

export type CdmObservableAssetCashCollateralValuationMethod = z.infer<
  typeof CdmObservableAssetCashCollateralValuationMethodSchema
>;
