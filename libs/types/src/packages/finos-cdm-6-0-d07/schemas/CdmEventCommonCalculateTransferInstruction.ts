import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmEventCommonResetSchema } from './CdmEventCommonReset';
import { CdmEventCommonTradeStateSchema } from './CdmEventCommonTradeState';
import { CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema } from './CdmProductTemplateMetafieldsReferenceWithMetaPayout';

const zod = z as any;

export const CdmEventCommonCalculateTransferInstructionSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CalculateTransferInstruction']
  )(
    zod.object({
      date: zod.string().optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      payerReceiver: zod
        .lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema)
        .optional(),
      payout: zod.lazy(
        () => CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema
      ),
      quantity: zod.lazy(() => CdmBaseMathQuantitySchema).optional(),
      resets: zod
        .array(zod.lazy(() => CdmEventCommonResetSchema))
        .min(0)
        .optional(),
      tradeState: zod.lazy(() => CdmEventCommonTradeStateSchema),
    })
  );

export type CdmEventCommonCalculateTransferInstruction = z.infer<
  typeof CdmEventCommonCalculateTransferInstructionSchema
>;
