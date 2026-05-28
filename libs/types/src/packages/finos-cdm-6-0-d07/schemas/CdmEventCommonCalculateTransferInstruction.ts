import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmEventCommonResetSchema } from './CdmEventCommonReset';
import { CdmEventCommonTradeStateSchema } from './CdmEventCommonTradeState';
import { CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema } from './CdmProductTemplateMetafieldsReferenceWithMetaPayout';

export const CdmEventCommonCalculateTransferInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CalculateTransferInstruction']
  )(
    z.object({
      date: z.string().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      payerReceiver: z
        .lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema)
        .optional(),
      payout: z.lazy(
        () => CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema
      ),
      quantity: z.lazy(() => CdmBaseMathQuantitySchema).optional(),
      resets: z
        .array(z.lazy(() => CdmEventCommonResetSchema))
        .min(0)
        .optional(),
      tradeState: z.lazy(() => CdmEventCommonTradeStateSchema),
    })
  );

export type CdmEventCommonCalculateTransferInstruction = z.infer<
  typeof CdmEventCommonCalculateTransferInstructionSchema
>;
