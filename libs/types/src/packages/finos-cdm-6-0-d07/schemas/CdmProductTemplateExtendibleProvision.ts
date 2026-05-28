import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema } from './CdmBaseDatetimeAdjustableRelativeOrPeriodicDates';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmProductTemplateCallingPartyEnumSchema } from './CdmProductTemplateCallingPartyEnum';
import { CdmProductTemplateExerciseNoticeSchema } from './CdmProductTemplateExerciseNotice';
import { CdmProductTemplateExerciseTermsSchema } from './CdmProductTemplateExerciseTerms';
import { CdmProductTemplateExtendibleProvisionAdjustedDatesSchema } from './CdmProductTemplateExtendibleProvisionAdjustedDates';

export const CdmProductTemplateExtendibleProvisionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExtendibleProvision']
  )(
    z.object({
      buyer: z
        .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
        .optional(),
      callingParty: z
        .lazy(() => CdmProductTemplateCallingPartyEnumSchema)
        .optional(),
      description: z.string().optional(),
      exerciseNotice: z
        .lazy(() => CdmProductTemplateExerciseNoticeSchema)
        .optional(),
      exerciseTerms: z.lazy(() => CdmProductTemplateExerciseTermsSchema),
      extendibleProvisionAdjustedDates: z
        .lazy(() => CdmProductTemplateExtendibleProvisionAdjustedDatesSchema)
        .optional(),
      extensionPeriod: z
        .lazy(() => CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema)
        .optional(),
      extensionTerm: z
        .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
        .optional(),
      followUpConfirmation: z.boolean().optional(),
      name: z.string().optional(),
      noticeDeadlineDateTime: z.string().optional(),
      noticeDeadlinePeriod: z
        .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
        .optional(),
      seller: z
        .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
        .optional(),
      singlePartyOption: z
        .lazy(() => CdmBaseStaticdataPartyPartyRoleSchema)
        .optional(),
    })
  );

export type CdmProductTemplateExtendibleProvision = z.infer<
  typeof CdmProductTemplateExtendibleProvisionSchema
>;
