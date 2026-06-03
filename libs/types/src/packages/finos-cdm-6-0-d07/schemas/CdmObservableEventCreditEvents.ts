import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableEventCreditEventNoticeSchema } from './CdmObservableEventCreditEventNotice';
import { CdmObservableEventFailureToPaySchema } from './CdmObservableEventFailureToPay';
import { CdmObservableEventRestructuringSchema } from './CdmObservableEventRestructuring';

const zod = z as any;

export const CdmObservableEventCreditEventsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/CreditEvents']
)(
  zod.object({
    bankruptcy: zod.boolean().optional(),
    creditEventNotice: zod
      .lazy(() => CdmObservableEventCreditEventNoticeSchema)
      .optional(),
    defaultRequirement: zod
      .lazy(() => CdmObservableAssetMoneySchema)
      .optional(),
    description: zod.string().optional(),
    distressedRatingsDowngrade: zod.boolean().optional(),
    failureToPay: zod
      .lazy(() => CdmObservableEventFailureToPaySchema)
      .optional(),
    failureToPayInterest: zod.boolean().optional(),
    failureToPayPrincipal: zod.boolean().optional(),
    governmentalIntervention: zod.boolean().optional(),
    impliedWritedown: zod.boolean().optional(),
    maturityExtension: zod.boolean().optional(),
    name: zod.string().optional(),
    obligationAcceleration: zod.boolean().optional(),
    obligationDefault: zod.boolean().optional(),
    repudiationMoratorium: zod.boolean().optional(),
    restructuring: zod
      .lazy(() => CdmObservableEventRestructuringSchema)
      .optional(),
    writedown: zod.boolean().optional(),
  })
);

export type CdmObservableEventCreditEvents = z.infer<
  typeof CdmObservableEventCreditEventsSchema
>;
