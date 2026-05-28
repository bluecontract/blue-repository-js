import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonObservationEventSchema } from './CdmEventCommonObservationEvent';
import { CdmEventCommonStateSchema } from './CdmEventCommonState';
import { CdmEventCommonValuationSchema } from './CdmEventCommonValuation';
import { CdmEventPositionCounterpartyPositionSchema } from './CdmEventPositionCounterpartyPosition';

export const CdmEventCommonCounterpartyPositionStateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CounterpartyPositionState']
  )(
    z.object({
      counterpartyPosition: z.lazy(
        () => CdmEventPositionCounterpartyPositionSchema
      ),
      description: z.string().optional(),
      name: z.string().optional(),
      observationHistory: z
        .array(z.lazy(() => CdmEventCommonObservationEventSchema))
        .min(0)
        .optional(),
      state: z.lazy(() => CdmEventCommonStateSchema).optional(),
      valuationHistory: z
        .array(z.lazy(() => CdmEventCommonValuationSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmEventCommonCounterpartyPositionState = z.infer<
  typeof CdmEventCommonCounterpartyPositionStateSchema
>;
