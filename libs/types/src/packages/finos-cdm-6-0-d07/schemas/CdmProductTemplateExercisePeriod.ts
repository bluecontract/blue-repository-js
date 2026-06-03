import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';

const zod = z as any;

export const CdmProductTemplateExercisePeriodSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExercisePeriod']
)(
  zod.object({
    description: zod.string().optional(),
    earliestExerciseDateTenor: zod.lazy(() => CdmBaseDatetimePeriodSchema),
    exerciseFrequency: zod.lazy(() => CdmBaseDatetimePeriodSchema).optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductTemplateExercisePeriod = z.infer<
  typeof CdmProductTemplateExercisePeriodSchema
>;
