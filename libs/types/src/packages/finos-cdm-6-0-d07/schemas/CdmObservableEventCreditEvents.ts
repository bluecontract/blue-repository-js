import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableEventCreditEventNoticeSchema } from './CdmObservableEventCreditEventNotice';
import { CdmObservableEventFailureToPaySchema } from './CdmObservableEventFailureToPay';
import { CdmObservableEventRestructuringSchema } from './CdmObservableEventRestructuring';

export const CdmObservableEventCreditEventsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/CreditEvents']
  )(
    z.object({
      bankruptcy: z.boolean().optional(),
      creditEventNotice: z
        .lazy(() => CdmObservableEventCreditEventNoticeSchema)
        .optional(),
      defaultRequirement: z
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      description: z.string().optional(),
      distressedRatingsDowngrade: z.boolean().optional(),
      failureToPay: z
        .lazy(() => CdmObservableEventFailureToPaySchema)
        .optional(),
      failureToPayInterest: z.boolean().optional(),
      failureToPayPrincipal: z.boolean().optional(),
      governmentalIntervention: z.boolean().optional(),
      impliedWritedown: z.boolean().optional(),
      maturityExtension: z.boolean().optional(),
      name: z.string().optional(),
      obligationAcceleration: z.boolean().optional(),
      obligationDefault: z.boolean().optional(),
      repudiationMoratorium: z.boolean().optional(),
      restructuring: z
        .lazy(() => CdmObservableEventRestructuringSchema)
        .optional(),
      writedown: z.boolean().optional(),
    })
  );

export type CdmObservableEventCreditEvents = z.infer<
  typeof CdmObservableEventCreditEventsSchema
>;
