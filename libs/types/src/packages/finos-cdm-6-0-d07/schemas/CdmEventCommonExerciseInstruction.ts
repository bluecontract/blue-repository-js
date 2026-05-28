import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrAdjustedDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedDate';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmEventCommonPrimitiveInstructionSchema } from './CdmEventCommonPrimitiveInstruction';
import { CdmEventCommonTradeIdentifierSchema } from './CdmEventCommonTradeIdentifier';
import { CdmProductTemplateMetafieldsReferenceWithMetaOptionPayoutSchema } from './CdmProductTemplateMetafieldsReferenceWithMetaOptionPayout';

export const CdmEventCommonExerciseInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ExerciseInstruction']
  )(
    z.object({
      description: z.string().optional(),
      exerciseDate: z
        .lazy((): z.ZodTypeAny => CdmBaseDatetimeAdjustableOrAdjustedDateSchema)
        .optional(),
      exerciseOption: z
        .lazy(
          (): z.ZodTypeAny =>
            CdmProductTemplateMetafieldsReferenceWithMetaOptionPayoutSchema
        )
        .optional(),
      exerciseQuantity: z.lazy(
        (): z.ZodTypeAny => CdmEventCommonPrimitiveInstructionSchema
      ),
      exerciseTime: z
        .lazy((): z.ZodTypeAny => CdmBaseDatetimeBusinessCenterTimeSchema)
        .optional(),
      name: z.string().optional(),
      replacementTradeIdentifier: z
        .array(z.lazy((): z.ZodTypeAny => CdmEventCommonTradeIdentifierSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmEventCommonExerciseInstruction = z.infer<
  typeof CdmEventCommonExerciseInstructionSchema
>;
