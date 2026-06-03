import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonObservationEventSchema } from './CdmEventCommonObservationEvent';
import { CdmEventCommonResetSchema } from './CdmEventCommonReset';
import { CdmEventCommonStateSchema } from './CdmEventCommonState';
import { CdmEventCommonTradeSchema } from './CdmEventCommonTrade';
import { CdmEventCommonTransferStateSchema } from './CdmEventCommonTransferState';
import { CdmEventCommonValuationSchema } from './CdmEventCommonValuation';

const zod = z as any;

export const CdmEventCommonTradeStateSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/TradeState']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    observationHistory: zod
      .array(zod.lazy(() => CdmEventCommonObservationEventSchema))
      .min(0)
      .optional(),
    resetHistory: zod
      .array(zod.lazy(() => CdmEventCommonResetSchema))
      .min(0)
      .optional(),
    state: zod.lazy(() => CdmEventCommonStateSchema).optional(),
    trade: zod.lazy(() => CdmEventCommonTradeSchema),
    transferHistory: zod
      .array(zod.lazy(() => CdmEventCommonTransferStateSchema))
      .min(0)
      .optional(),
    valuationHistory: zod
      .array(zod.lazy(() => CdmEventCommonValuationSchema))
      .min(0)
      .optional(),
  })
);

export type CdmEventCommonTradeState = z.infer<
  typeof CdmEventCommonTradeStateSchema
>;
