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

const zod = z as any;

export const CdmProductTemplateExerciseTermsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExerciseTerms']
)(
  zod.object({
    commencementDate: zod
      .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
      .optional(),
    description: zod.string().optional(),
    earliestExerciseTime: zod
      .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
      .optional(),
    exerciseDates: zod
      .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDatesSchema)
      .optional(),
    exerciseFee: zod.lazy(() => CdmProductTemplateExerciseFeeSchema).optional(),
    exerciseFeeSchedule: zod
      .lazy(() => CdmProductTemplateExerciseFeeScheduleSchema)
      .optional(),
    exerciseProcedure: zod
      .lazy(() => CdmProductTemplateExerciseProcedureSchema)
      .optional(),
    expirationDate: zod
      .array(zod.lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema))
      .min(0)
      .optional(),
    expirationTime: zod
      .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
      .optional(),
    expirationTimeType: zod.lazy(
      () => CdmProductTemplateExpirationTimeTypeEnumSchema
    ),
    latestExerciseTime: zod
      .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
      .optional(),
    multipleExercise: zod
      .lazy(() => CdmProductTemplateMultipleExerciseSchema)
      .optional(),
    name: zod.string().optional(),
    partialExercise: zod
      .lazy(() => CdmProductTemplatePartialExerciseSchema)
      .optional(),
    relevantUnderlyingDate: zod
      .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDatesSchema)
      .optional(),
    style: zod
      .lazy(() => CdmProductTemplateOptionExerciseStyleEnumSchema)
      .optional(),
  })
);

export type CdmProductTemplateExerciseTerms = z.infer<
  typeof CdmProductTemplateExerciseTermsSchema
>;
