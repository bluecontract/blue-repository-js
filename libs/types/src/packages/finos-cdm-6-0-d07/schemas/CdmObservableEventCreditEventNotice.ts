import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterEnumSchema } from './CdmBaseDatetimeBusinessCenterEnum';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmObservableEventPubliclyAvailableInformationSchema } from './CdmObservableEventPubliclyAvailableInformation';

export const CdmObservableEventCreditEventNoticeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/CreditEventNotice']
  )(
    z.object({
      businessCenter: z
        .lazy(() => CdmBaseDatetimeBusinessCenterEnumSchema)
        .optional(),
      name: z.string().optional(),
      notifyingParty: z
        .array(z.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema))
        .min(1)
        .max(2)
        .optional(),
      publiclyAvailableInformation: z
        .lazy(() => CdmObservableEventPubliclyAvailableInformationSchema)
        .optional(),
    })
  );

export type CdmObservableEventCreditEventNotice = z.infer<
  typeof CdmObservableEventCreditEventNoticeSchema
>;
