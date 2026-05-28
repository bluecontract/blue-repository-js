import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryPartySchema } from './CdmBaseStaticdataPartyAncillaryParty';
import { CdmBaseStaticdataPartyCounterpartySchema } from './CdmBaseStaticdataPartyCounterparty';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmEventCommonTradeIdentifierSchema } from './CdmEventCommonTradeIdentifier';

export const CdmEventCommonPartyChangeInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/PartyChangeInstruction']
  )(
    z.object({
      ancillaryParty: z
        .lazy(() => CdmBaseStaticdataPartyAncillaryPartySchema)
        .optional(),
      counterparty: z.lazy(() => CdmBaseStaticdataPartyCounterpartySchema),
      description: z.string().optional(),
      name: z.string().optional(),
      partyRole: z.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema).optional(),
      tradeId: z
        .array(z.lazy(() => CdmEventCommonTradeIdentifierSchema))
        .min(1)
        .optional(),
    })
  );

export type CdmEventCommonPartyChangeInstruction = z.infer<
  typeof CdmEventCommonPartyChangeInstructionSchema
>;
