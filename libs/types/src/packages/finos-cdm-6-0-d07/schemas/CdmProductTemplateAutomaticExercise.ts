import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductTemplateAutomaticExerciseSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/AutomaticExercise']
)(
  zod.object({
    description: zod.string().optional(),
    isApplicable: zod.boolean().optional(),
    name: zod.string().optional(),
    thresholdRate: zod.number().optional(),
  })
);

export type CdmProductTemplateAutomaticExercise = z.infer<
  typeof CdmProductTemplateAutomaticExerciseSchema
>;
