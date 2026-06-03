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

const zod = z as any;

export const CdmProductTemplateExtendibleProvisionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExtendibleProvision']
)(
  zod.object({
    buyer: zod
      .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
      .optional(),
    callingParty: zod
      .lazy(() => CdmProductTemplateCallingPartyEnumSchema)
      .optional(),
    description: zod.string().optional(),
    exerciseNotice: zod
      .lazy(() => CdmProductTemplateExerciseNoticeSchema)
      .optional(),
    exerciseTerms: zod.lazy(() => CdmProductTemplateExerciseTermsSchema),
    extendibleProvisionAdjustedDates: zod
      .lazy(() => CdmProductTemplateExtendibleProvisionAdjustedDatesSchema)
      .optional(),
    extensionPeriod: zod
      .lazy(() => CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema)
      .optional(),
    extensionTerm: zod
      .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
      .optional(),
    followUpConfirmation: zod.boolean().optional(),
    name: zod.string().optional(),
    noticeDeadlineDateTime: zod.string().optional(),
    noticeDeadlinePeriod: zod
      .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
      .optional(),
    seller: zod
      .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
      .optional(),
    singlePartyOption: zod
      .lazy(() => CdmBaseStaticdataPartyPartyRoleSchema)
      .optional(),
  })
);

export type CdmProductTemplateExtendibleProvision = z.infer<
  typeof CdmProductTemplateExtendibleProvisionSchema
>;
