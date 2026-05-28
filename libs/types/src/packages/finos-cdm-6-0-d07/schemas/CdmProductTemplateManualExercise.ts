import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateExerciseNoticeSchema } from './CdmProductTemplateExerciseNotice';

export const CdmProductTemplateManualExerciseSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ManualExercise']
  )(
    z.object({
      description: z.string().optional(),
      exerciseNotice: z
        .lazy(() => CdmProductTemplateExerciseNoticeSchema)
        .optional(),
      fallbackExercise: z.boolean().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductTemplateManualExercise = z.infer<
  typeof CdmProductTemplateManualExerciseSchema
>;
