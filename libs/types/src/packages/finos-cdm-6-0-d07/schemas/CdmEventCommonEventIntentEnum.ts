import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventCommonEventIntentEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/EventIntentEnum']
)(
  zod.enum([
    'Allocation',
    'CashFlow',
    'Clearing',
    'Compression',
    'ContractFormation',
    'ContractTermsAmendment',
    'CorporateActionAdjustment',
    'CreditEvent',
    'Decrease',
    'EarlyTerminationProvision',
    'Increase',
    'IndexTransition',
    'NotionalReset',
    'NotionalStep',
    'Novation',
    'ObservationRecord',
    'OptionExercise',
    'OptionalCancellation',
    'OptionalExtension',
    'PortfolioRebalancing',
    'PrincipalExchange',
    'Reallocation',
    'Repurchase',
  ] as [string, ...string[]]) as unknown as z.ZodObject<any>
);

export type CdmEventCommonEventIntentEnum = z.infer<
  typeof CdmEventCommonEventIntentEnumSchema
>;
