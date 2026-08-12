import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateAutomaticExerciseSchema } from './CdmProductTemplateAutomaticExercise';
import { CdmProductTemplateManualExerciseSchema } from './CdmProductTemplateManualExercise';

const zod = z as any;

export const CdmProductTemplateExerciseProcedureSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExerciseProcedure']
)(
  zod.object({
    automaticExercise: zod
      .lazy(() => CdmProductTemplateAutomaticExerciseSchema)
      .optional(),
    description: zod.string().optional(),
    followUpConfirmation: zod.boolean(),
    limitedRightToConfirm: zod.boolean().optional(),
    manualExercise: zod
      .lazy(() => CdmProductTemplateManualExerciseSchema)
      .optional(),
    name: zod.string().optional(),
    splitTicket: zod.boolean().optional(),
  })
);

export type CdmProductTemplateExerciseProcedure = z.infer<
  typeof CdmProductTemplateExerciseProcedureSchema
>;
