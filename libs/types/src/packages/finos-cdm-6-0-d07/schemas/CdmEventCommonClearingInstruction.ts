import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmEventCommonTradeStateSchema } from './CdmEventCommonTradeState';

const zod = z as any;

export const CdmEventCommonClearingInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ClearingInstruction']
)(
  zod.object({
    alphaContract: zod.lazy(() => CdmEventCommonTradeStateSchema),
    clearerParty1: zod.lazy(() => CdmBaseStaticdataPartyPartySchema).optional(),
    clearerParty2: zod.lazy(() => CdmBaseStaticdataPartyPartySchema).optional(),
    clearingParty: zod.lazy(() => CdmBaseStaticdataPartyPartySchema),
    description: zod.string().optional(),
    isOpenOffer: zod.boolean().optional(),
    name: zod.string().optional(),
    party1: zod.lazy(() => CdmBaseStaticdataPartyPartySchema),
    party2: zod.lazy(() => CdmBaseStaticdataPartyPartySchema),
  })
);

export type CdmEventCommonClearingInstruction = z.infer<
  typeof CdmEventCommonClearingInstructionSchema
>;
