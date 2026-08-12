import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventCommonExerciseEventSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ExerciseEvent']
)(
  zod.object({
    adjustedCashSettlementPaymentDate: zod.string().optional(),
    adjustedCashSettlementValuationDate: zod.string().optional(),
    adjustedExerciseDate: zod.string(),
    adjustedExerciseFeePaymentDate: zod.string().optional(),
    adjustedRelevantSwapEffectiveDate: zod.string(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmEventCommonExerciseEvent = z.infer<
  typeof CdmEventCommonExerciseEventSchema
>;
