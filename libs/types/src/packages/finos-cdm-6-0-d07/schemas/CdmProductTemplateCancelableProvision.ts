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

export const CdmProductTemplateCancelableProvisionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/CancelableProvision']
  )(
    z.object({
      buyer: z
        .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
        .optional(),
      callingParty: z
        .lazy(() => CdmProductTemplateCallingPartyEnumSchema)
        .optional(),
      cancelableProvisionAdjustedDates: z
        .lazy(() => CdmProductTemplateCancelableProvisionAdjustedDatesSchema)
        .optional(),
      description: z.string().optional(),
      earliestCancellationTime: z
        .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
        .optional(),
      earliestDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      effectiveDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDatesSchema)
        .optional(),
      effectivePeriod: z.lazy(() => CdmBaseDatetimePeriodSchema).optional(),
      exerciseNotice: z
        .lazy(() => CdmProductTemplateExerciseNoticeSchema)
        .optional(),
      exerciseTerms: z.lazy(() => CdmProductTemplateExerciseTermsSchema),
      expirationDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      finalCalculationPeriodDateAdjustment: z
        .array(
          z.lazy(
            () =>
              CdmProductCommonScheduleFinalCalculationPeriodDateAdjustmentSchema
          )
        )
        .min(0)
        .optional(),
      followUpConfirmation: z.boolean(),
      initialFee: z.lazy(() => CdmEventCommonTransferSchema).optional(),
      latestCancelationTime: z
        .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
        .optional(),
      name: z.string().optional(),
      seller: z
        .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
        .optional(),
    })
  );

export type CdmProductTemplateCancelableProvision = z.infer<
  typeof CdmProductTemplateCancelableProvisionSchema
>;
