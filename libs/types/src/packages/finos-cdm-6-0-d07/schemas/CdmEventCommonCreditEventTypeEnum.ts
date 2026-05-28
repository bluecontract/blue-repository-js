import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonCreditEventTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CreditEventTypeEnum']
  )(
    z.enum([
      'Bankruptcy',
      'DistressedRatingsDowngrade',
      'FailureToPay',
      'FailureToPayInterest',
      'FailureToPayPrincipal',
      'GovernmentalIntervention',
      'ImpliedWritedown',
      'MaturityExtension',
      'ObligationAcceleration',
      'ObligationDefault',
      'RepudiationMoratorium',
      'Restructuring',
      'Writedown',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmEventCommonCreditEventTypeEnum = z.infer<
  typeof CdmEventCommonCreditEventTypeEnumSchema
>;
