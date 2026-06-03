import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductTemplateCancellationEventSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/CancellationEvent']
)(
  zod.object({
    adjustedEarlyTerminationDate: zod.string(),
    adjustedExerciseDate: zod.string(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductTemplateCancellationEvent = z.infer<
  typeof CdmProductTemplateCancellationEventSchema
>;
