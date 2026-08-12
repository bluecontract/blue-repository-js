import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateExerciseNoticeSchema } from './CdmProductTemplateExerciseNotice';

const zod = z as any;

export const CdmProductTemplateManualExerciseSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ManualExercise']
)(
  zod.object({
    description: zod.string().optional(),
    exerciseNotice: zod
      .lazy(() => CdmProductTemplateExerciseNoticeSchema)
      .optional(),
    fallbackExercise: zod.boolean().optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductTemplateManualExercise = z.infer<
  typeof CdmProductTemplateManualExerciseSchema
>;
