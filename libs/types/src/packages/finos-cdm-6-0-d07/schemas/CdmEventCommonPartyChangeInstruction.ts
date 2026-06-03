import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryPartySchema } from './CdmBaseStaticdataPartyAncillaryParty';
import { CdmBaseStaticdataPartyCounterpartySchema } from './CdmBaseStaticdataPartyCounterparty';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmEventCommonTradeIdentifierSchema } from './CdmEventCommonTradeIdentifier';

const zod = z as any;

export const CdmEventCommonPartyChangeInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/PartyChangeInstruction']
)(
  zod.object({
    ancillaryParty: zod
      .lazy(() => CdmBaseStaticdataPartyAncillaryPartySchema)
      .optional(),
    counterparty: zod.lazy(() => CdmBaseStaticdataPartyCounterpartySchema),
    description: zod.string().optional(),
    name: zod.string().optional(),
    partyRole: zod.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema).optional(),
    tradeId: zod
      .array(zod.lazy(() => CdmEventCommonTradeIdentifierSchema))
      .min(1)
      .optional(),
  })
);

export type CdmEventCommonPartyChangeInstruction = z.infer<
  typeof CdmEventCommonPartyChangeInstructionSchema
>;
