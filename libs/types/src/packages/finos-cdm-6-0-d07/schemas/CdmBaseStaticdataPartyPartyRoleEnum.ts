import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataPartyPartyRoleEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PartyRoleEnum']
)(
  zod.enum([
    'Accountant',
    'AgentLender',
    'AllocationAgent',
    'ArrangingBroker',
    'BarrierDeterminationAgent',
    'BeneficialOwner',
    'Beneficiary',
    'BookingParty',
    'Borrower',
    'Buyer',
    'BuyerDecisionMaker',
    'Chargor',
    'ClearingClient',
    'ClearingExceptionParty',
    'ClearingFirm',
    'ClearingOrganization',
    'Client',
    'ClientDecisionMaker',
    'ConfirmationPlatform',
    'ContractualParty',
    'CounterPartyAffiliate',
    'CounterPartyUltimateParent',
    'Counterparty',
    'CreditSupportProvider',
    'Custodian',
    'DataSubmitter',
    'DeterminingParty',
    'DisputingParty',
    'DocumentRepository',
    'ExecutingBroker',
    'ExecutingEntity',
    'ExecutionAgent',
    'ExecutionFacility',
    'Guarantor',
    'HedgingParty',
    'Lender',
    'OrderTransmitter',
    'PTRRServiceProvider',
    'Pledgor',
    'PrimeBroker',
    'PriorTradeRepository',
    'PublicationVenue',
    'ReportingParty',
    'ReportingPartyAffiliate',
    'ReportingPartyUltimateParent',
    'SecuredParty',
    'Seller',
    'SellerDecisionMaker',
    'SettlementAgent',
    'ThirdPartyCustodian',
    'TradeRepository',
    'TradeSource',
    'TradingManager',
    'TradingPartner',
    'TripartyAgent',
  ] as [string, ...string[]]) as unknown as z.ZodObject<any>
);

export type CdmBaseStaticdataPartyPartyRoleEnum = z.infer<
  typeof CdmBaseStaticdataPartyPartyRoleEnumSchema
>;
