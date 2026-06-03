import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonObservationEventSchema } from './CdmEventCommonObservationEvent';
import { CdmEventCommonStateSchema } from './CdmEventCommonState';
import { CdmEventCommonValuationSchema } from './CdmEventCommonValuation';
import { CdmEventPositionCounterpartyPositionSchema } from './CdmEventPositionCounterpartyPosition';

const zod = z as any;

export const CdmEventCommonCounterpartyPositionStateSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CounterpartyPositionState']
  )(
    zod.object({
      counterpartyPosition: zod.lazy(
        () => CdmEventPositionCounterpartyPositionSchema
      ),
      description: zod.string().optional(),
      name: zod.string().optional(),
      observationHistory: zod
        .array(zod.lazy(() => CdmEventCommonObservationEventSchema))
        .min(0)
        .optional(),
      state: zod.lazy(() => CdmEventCommonStateSchema).optional(),
      valuationHistory: zod
        .array(zod.lazy(() => CdmEventCommonValuationSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmEventCommonCounterpartyPositionState = z.infer<
  typeof CdmEventCommonCounterpartyPositionStateSchema
>;
