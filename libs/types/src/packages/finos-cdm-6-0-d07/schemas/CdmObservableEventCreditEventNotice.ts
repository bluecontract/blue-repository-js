import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterEnumSchema } from './CdmBaseDatetimeBusinessCenterEnum';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmObservableEventPubliclyAvailableInformationSchema } from './CdmObservableEventPubliclyAvailableInformation';

const zod = z as any;

export const CdmObservableEventCreditEventNoticeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/CreditEventNotice']
)(
  zod.object({
    businessCenter: zod
      .lazy(() => CdmBaseDatetimeBusinessCenterEnumSchema)
      .optional(),
    name: zod.string().optional(),
    notifyingParty: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema))
      .min(1)
      .max(2)
      .optional(),
    publiclyAvailableInformation: zod
      .lazy(() => CdmObservableEventPubliclyAvailableInformationSchema)
      .optional(),
  })
);

export type CdmObservableEventCreditEventNotice = z.infer<
  typeof CdmObservableEventCreditEventNoticeSchema
>;
