import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmBaseMathScheduleSchema } from './CdmBaseMathSchedule';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema } from './CdmObservableAssetMetafieldsReferenceWithMetaMoney';
import { CdmProductCommonScheduleAmountScheduleSchema } from './CdmProductCommonScheduleAmountSchedule';

const zod = z as any;

export const CdmProductTemplateExerciseFeeScheduleSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExerciseFeeSchedule']
)(
  zod.object({
    description: zod.string().optional(),
    feeAmountSchedule: zod
      .lazy(() => CdmProductCommonScheduleAmountScheduleSchema)
      .optional(),
    feePaymentDate: zod.lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema),
    feeRateSchedule: zod.lazy(() => CdmBaseMathScheduleSchema).optional(),
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

export type CdmProductTemplateExerciseFeeSchedule = z.infer<
  typeof CdmProductTemplateExerciseFeeScheduleSchema
>;
