import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateAutomaticExerciseSchema } from './CdmProductTemplateAutomaticExercise';
import { CdmProductTemplateManualExerciseSchema } from './CdmProductTemplateManualExercise';

export const CdmProductTemplateExerciseProcedureSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExerciseProcedure']
  )(
    z.object({
      automaticExercise: z
        .lazy(() => CdmProductTemplateAutomaticExerciseSchema)
        .optional(),
      description: z.string().optional(),
      followUpConfirmation: z.boolean(),
      limitedRightToConfirm: z.boolean().optional(),
      manualExercise: z
        .lazy(() => CdmProductTemplateManualExerciseSchema)
        .optional(),
      name: z.string().optional(),
      splitTicket: z.boolean().optional(),
    })
  );

export type CdmProductTemplateExerciseProcedure = z.infer<
  typeof CdmProductTemplateExerciseProcedureSchema
>;
