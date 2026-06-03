import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema } from './CdmObservableAssetMetafieldsReferenceWithMetaMoney';

const zod = z as any;

export const CdmProductTemplateExerciseFeeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExerciseFee']
)(
  zod.object({
    description: zod.string().optional(),
    feeAmount: zod.number().optional(),
    feePaymentDate: zod.lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema),
    feeRate: zod.number().optional(),
    name: zod.string().optional(),
    notionalReference: zod.lazy(
      () => CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema
    ),
    payer: zod
      .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
      .optional(),
    receiver: zod
      .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
      .optional(),
  })
);

export type CdmProductTemplateExerciseFee = z.infer<
  typeof CdmProductTemplateExerciseFeeSchema
>;
