import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataPartyAncillaryRoleEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/AncillaryRoleEnum']
  )(
    zod.enum([
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
