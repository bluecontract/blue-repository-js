import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTradeState';
import { CdmObservableEventObservationSchema } from './CdmObservableEventObservation';

const zod = z as any;

export const CdmEventCommonBillingRecordInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/BillingRecordInstruction']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    observation: zod
      .array(zod.lazy(() => CdmObservableEventObservationSchema))
      .min(1)
      .optional(),
    recordEndDate: zod.string(),
    recordStartDate: zod.string(),
    settlementDate: zod.string(),
    tradeState: zod.lazy(
      () => CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema
    ),
  })
);

export type CdmEventCommonBillingRecordInstruction = z.infer<
  typeof CdmEventCommonBillingRecordInstructionSchema
>;
