import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductTemplateCancellationEventSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/CancellationEvent']
  )(
    z.object({
      adjustedEarlyTerminationDate: z.string(),
      adjustedExerciseDate: z.string(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductTemplateCancellationEvent = z.infer<
  typeof CdmProductTemplateCancellationEventSchema
>;
