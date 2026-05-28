import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTradeState';
import { CdmObservableEventObservationSchema } from './CdmObservableEventObservation';

export const CdmEventCommonBillingRecordInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/BillingRecordInstruction']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      observation: z
        .array(z.lazy(() => CdmObservableEventObservationSchema))
        .min(1)
        .optional(),
      recordEndDate: z.string(),
      recordStartDate: z.string(),
      settlementDate: z.string(),
      tradeState: z.lazy(
        () => CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema
      ),
    })
  );

export type CdmEventCommonBillingRecordInstruction = z.infer<
  typeof CdmEventCommonBillingRecordInstructionSchema
>;
