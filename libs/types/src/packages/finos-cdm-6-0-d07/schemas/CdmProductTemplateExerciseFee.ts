import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema } from './CdmObservableAssetMetafieldsReferenceWithMetaMoney';

export const CdmProductTemplateExerciseFeeSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExerciseFee']
)(
  z.object({
    description: z.string().optional(),
    feeAmount: z.number().optional(),
    feePaymentDate: z.lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema),
    feeRate: z.number().optional(),
    name: z.string().optional(),
    notionalReference: z.lazy(
      () => CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema
    ),
    payer: z
      .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
      .optional(),
    receiver: z
      .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
      .optional(),
  })
);

export type CdmProductTemplateExerciseFee = z.infer<
  typeof CdmProductTemplateExerciseFeeSchema
>;
