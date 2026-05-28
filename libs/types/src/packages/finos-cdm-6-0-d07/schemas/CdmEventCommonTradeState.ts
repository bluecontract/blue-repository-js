import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonObservationEventSchema } from './CdmEventCommonObservationEvent';
import { CdmEventCommonResetSchema } from './CdmEventCommonReset';
import { CdmEventCommonStateSchema } from './CdmEventCommonState';
import { CdmEventCommonTradeSchema } from './CdmEventCommonTrade';
import { CdmEventCommonTransferStateSchema } from './CdmEventCommonTransferState';
import { CdmEventCommonValuationSchema } from './CdmEventCommonValuation';

export const CdmEventCommonTradeStateSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/TradeState']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    observationHistory: z
      .array(z.lazy(() => CdmEventCommonObservationEventSchema))
      .min(0)
      .optional(),
    resetHistory: z
      .array(z.lazy(() => CdmEventCommonResetSchema))
      .min(0)
      .optional(),
    state: z.lazy(() => CdmEventCommonStateSchema).optional(),
    trade: z.lazy(() => CdmEventCommonTradeSchema),
    transferHistory: z
      .array(z.lazy(() => CdmEventCommonTransferStateSchema))
      .min(0)
      .optional(),
    valuationHistory: z
      .array(z.lazy(() => CdmEventCommonValuationSchema))
      .min(0)
      .optional(),
  })
);

export type CdmEventCommonTradeState = z.infer<
  typeof CdmEventCommonTradeStateSchema
>;
