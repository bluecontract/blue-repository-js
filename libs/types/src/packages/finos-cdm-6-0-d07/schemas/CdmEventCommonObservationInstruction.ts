import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonObservationEventSchema } from './CdmEventCommonObservationEvent';

export const CdmEventCommonObservationInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ObservationInstruction']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      observationEvent: z.lazy(() => CdmEventCommonObservationEventSchema),
    })
  );

export type CdmEventCommonObservationInstruction = z.infer<
  typeof CdmEventCommonObservationInstructionSchema
>;
