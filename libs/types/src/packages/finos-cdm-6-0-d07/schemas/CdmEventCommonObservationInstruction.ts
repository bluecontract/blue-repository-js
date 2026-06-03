import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonObservationEventSchema } from './CdmEventCommonObservationEvent';

const zod = z as any;

export const CdmEventCommonObservationInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ObservationInstruction']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    observationEvent: zod.lazy(() => CdmEventCommonObservationEventSchema),
  })
);

export type CdmEventCommonObservationInstruction = z.infer<
  typeof CdmEventCommonObservationInstructionSchema
>;
