import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeAdjustableOrRelativeDatesSchema } from './CdmBaseDatetimeAdjustableOrRelativeDates';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmProductTemplateExerciseFeeSchema } from './CdmProductTemplateExerciseFee';
import { CdmProductTemplateExerciseFeeScheduleSchema } from './CdmProductTemplateExerciseFeeSchedule';
import { CdmProductTemplateExerciseProcedureSchema } from './CdmProductTemplateExerciseProcedure';
import { CdmProductTemplateExpirationTimeTypeEnumSchema } from './CdmProductTemplateExpirationTimeTypeEnum';
import { CdmProductTemplateMultipleExerciseSchema } from './CdmProductTemplateMultipleExercise';
import { CdmProductTemplateOptionExerciseStyleEnumSchema } from './CdmProductTemplateOptionExerciseStyleEnum';
import { CdmProductTemplatePartialExerciseSchema } from './CdmProductTemplatePartialExercise';

export const CdmProductTemplateExerciseTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExerciseTerms']
  )(
    z.object({
      commencementDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      description: z.string().optional(),
      earliestExerciseTime: z
        .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
        .optional(),
      exerciseDates: z
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDatesSchema)
        .optional(),
      exerciseFee: z.lazy(() => CdmProductTemplateExerciseFeeSchema).optional(),
      exerciseFeeSchedule: z
        .lazy(() => CdmProductTemplateExerciseFeeScheduleSchema)
        .optional(),
      exerciseProcedure: z
        .lazy(() => CdmProductTemplateExerciseProcedureSchema)
        .optional(),
      expirationDate: z
        .array(z.lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema))
        .min(0)
        .optional(),
      expirationTime: z
        .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
        .optional(),
      expirationTimeType: z.lazy(
        () => CdmProductTemplateExpirationTimeTypeEnumSchema
      ),
      latestExerciseTime: z
        .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
        .optional(),
      multipleExercise: z
        .lazy(() => CdmProductTemplateMultipleExerciseSchema)
        .optional(),
      name: z.string().optional(),
      partialExercise: z
        .lazy(() => CdmProductTemplatePartialExerciseSchema)
        .optional(),
      relevantUnderlyingDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDatesSchema)
        .optional(),
      style: z
        .lazy(() => CdmProductTemplateOptionExerciseStyleEnumSchema)
        .optional(),
    })
  );

export type CdmProductTemplateExerciseTerms = z.infer<
  typeof CdmProductTemplateExerciseTermsSchema
>;
