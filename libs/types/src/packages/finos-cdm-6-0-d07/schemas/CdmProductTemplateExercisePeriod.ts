import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';

export const CdmProductTemplateExercisePeriodSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExercisePeriod']
  )(
    z.object({
      description: z.string().optional(),
      earliestExerciseDateTenor: z.lazy(() => CdmBaseDatetimePeriodSchema),
      exerciseFrequency: z.lazy(() => CdmBaseDatetimePeriodSchema).optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductTemplateExercisePeriod = z.infer<
  typeof CdmProductTemplateExercisePeriodSchema
>;
