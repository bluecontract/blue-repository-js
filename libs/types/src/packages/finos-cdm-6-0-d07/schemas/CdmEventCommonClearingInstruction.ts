import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmEventCommonTradeStateSchema } from './CdmEventCommonTradeState';

export const CdmEventCommonClearingInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ClearingInstruction']
  )(
    z.object({
      alphaContract: z.lazy(() => CdmEventCommonTradeStateSchema),
      clearerParty1: z.lazy(() => CdmBaseStaticdataPartyPartySchema).optional(),
      clearerParty2: z.lazy(() => CdmBaseStaticdataPartyPartySchema).optional(),
      clearingParty: z.lazy(() => CdmBaseStaticdataPartyPartySchema),
      description: z.string().optional(),
      isOpenOffer: z.boolean().optional(),
      name: z.string().optional(),
      party1: z.lazy(() => CdmBaseStaticdataPartyPartySchema),
      party2: z.lazy(() => CdmBaseStaticdataPartyPartySchema),
    })
  );

export type CdmEventCommonClearingInstruction = z.infer<
  typeof CdmEventCommonClearingInstructionSchema
>;
