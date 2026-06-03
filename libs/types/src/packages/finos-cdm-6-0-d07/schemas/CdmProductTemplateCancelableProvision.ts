import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeAdjustableOrRelativeDatesSchema } from './CdmBaseDatetimeAdjustableOrRelativeDates';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmEventCommonTransferSchema } from './CdmEventCommonTransfer';
import { CdmProductCommonScheduleFinalCalculationPeriodDateAdjustmentSchema } from './CdmProductCommonScheduleFinalCalculationPeriodDateAdjustment';
import { CdmProductTemplateCallingPartyEnumSchema } from './CdmProductTemplateCallingPartyEnum';
import { CdmProductTemplateCancelableProvisionAdjustedDatesSchema } from './CdmProductTemplateCancelableProvisionAdjustedDates';
import { CdmProductTemplateExerciseNoticeSchema } from './CdmProductTemplateExerciseNotice';
import { CdmProductTemplateExerciseTermsSchema } from './CdmProductTemplateExerciseTerms';

const zod = z as any;

export const CdmProductTemplateCancelableProvisionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/CancelableProvision']
)(
  zod.object({
    buyer: zod
      .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
      .optional(),
    callingParty: zod
      .lazy(() => CdmProductTemplateCallingPartyEnumSchema)
      .optional(),
    cancelableProvisionAdjustedDates: zod
      .lazy(() => CdmProductTemplateCancelableProvisionAdjustedDatesSchema)
      .optional(),
    description: zod.string().optional(),
    earliestCancellationTime: zod
      .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
      .optional(),
    earliestDate: zod
      .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
      .optional(),
    effectiveDate: zod
      .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDatesSchema)
      .optional(),
    effectivePeriod: zod.lazy(() => CdmBaseDatetimePeriodSchema).optional(),
    exerciseNotice: zod
      .lazy(() => CdmProductTemplateExerciseNoticeSchema)
      .optional(),
    exerciseTerms: zod.lazy(() => CdmProductTemplateExerciseTermsSchema),
    expirationDate: zod
      .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
      .optional(),
    finalCalculationPeriodDateAdjustment: zod
      .array(
        zod.lazy(
          () =>
            CdmProductCommonScheduleFinalCalculationPeriodDateAdjustmentSchema
        )
      )
      .min(0)
      .optional(),
    followUpConfirmation: zod.boolean(),
    initialFee: zod.lazy(() => CdmEventCommonTransferSchema).optional(),
    latestCancelationTime: zod
      .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
      .optional(),
    name: zod.string().optional(),
    seller: zod
      .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
      .optional(),
  })
);

export type CdmProductTemplateCancelableProvision = z.infer<
  typeof CdmProductTemplateCancelableProvisionSchema
>;
