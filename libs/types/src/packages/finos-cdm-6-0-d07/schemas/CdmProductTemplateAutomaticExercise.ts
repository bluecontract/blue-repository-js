import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductTemplateAutomaticExerciseSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/AutomaticExercise']
  )(
    z.object({
      description: z.string().optional(),
      isApplicable: z.boolean().optional(),
      name: z.string().optional(),
      thresholdRate: z.number().optional(),
    })
  );

export type CdmProductTemplateAutomaticExercise = z.infer<
  typeof CdmProductTemplateAutomaticExerciseSchema
>;
