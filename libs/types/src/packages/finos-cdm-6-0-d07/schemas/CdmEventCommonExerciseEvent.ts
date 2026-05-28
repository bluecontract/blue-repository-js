import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonExerciseEventSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ExerciseEvent']
)(
  z.object({
    adjustedCashSettlementPaymentDate: z.string().optional(),
    adjustedCashSettlementValuationDate: z.string().optional(),
    adjustedExerciseDate: z.string(),
    adjustedExerciseFeePaymentDate: z.string().optional(),
    adjustedRelevantSwapEffectiveDate: z.string(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type CdmEventCommonExerciseEvent = z.infer<
  typeof CdmEventCommonExerciseEventSchema
>;
