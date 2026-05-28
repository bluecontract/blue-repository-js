import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataPartyAncillaryRoleEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/AncillaryRoleEnum']
  )(
    z.enum([
      'CalculationAgentFallback',
      'CalculationAgentIndependent',
      'CalculationAgentMandatoryEarlyTermination',
      'CalculationAgentOptionalEarlyTermination',
      'DisruptionEventsDeterminingParty',
      'ExerciseNoticeReceiverPartyCancelableProvision',
      'ExerciseNoticeReceiverPartyExtendibleProvision',
      'ExerciseNoticeReceiverPartyManual',
      'ExerciseNoticeReceiverPartyOptionalEarlyTermination',
      'ExtraordinaryDividendsParty',
      'PredeterminedClearingOrganizationParty',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataPartyAncillaryRoleEnum = z.infer<
  typeof CdmBaseStaticdataPartyAncillaryRoleEnumSchema
>;
