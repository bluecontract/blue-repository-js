import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmBaseMathScheduleSchema } from './CdmBaseMathSchedule';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema } from './CdmObservableAssetMetafieldsReferenceWithMetaMoney';
import { CdmProductCommonScheduleAmountScheduleSchema } from './CdmProductCommonScheduleAmountSchedule';

export const CdmProductTemplateExerciseFeeScheduleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExerciseFeeSchedule']
  )(
    z.object({
      description: z.string().optional(),
      feeAmountSchedule: z
        .lazy(() => CdmProductCommonScheduleAmountScheduleSchema)
        .optional(),
      feePaymentDate: z.lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema),
      feeRateSchedule: z.lazy(() => CdmBaseMathScheduleSchema).optional(),
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

export type CdmProductTemplateExerciseFeeSchedule = z.infer<
  typeof CdmProductTemplateExerciseFeeScheduleSchema
>;
