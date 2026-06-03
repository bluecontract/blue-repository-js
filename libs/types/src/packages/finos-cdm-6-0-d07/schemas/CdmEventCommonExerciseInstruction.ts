import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrAdjustedDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedDate';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmEventCommonPrimitiveInstructionSchema } from './CdmEventCommonPrimitiveInstruction';
import { CdmEventCommonTradeIdentifierSchema } from './CdmEventCommonTradeIdentifier';
import { CdmProductTemplateMetafieldsReferenceWithMetaOptionPayoutSchema } from './CdmProductTemplateMetafieldsReferenceWithMetaOptionPayout';

const zod = z as any;

export const CdmEventCommonExerciseInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ExerciseInstruction']
)(
  zod.object({
    description: zod.string().optional(),
    exerciseDate: zod
      .lazy((): z.ZodTypeAny => CdmBaseDatetimeAdjustableOrAdjustedDateSchema)
      .optional(),
    exerciseOption: zod
      .lazy(
        (): z.ZodTypeAny =>
          CdmProductTemplateMetafieldsReferenceWithMetaOptionPayoutSchema
      )
      .optional(),
    exerciseQuantity: zod.lazy(
      (): z.ZodTypeAny => CdmEventCommonPrimitiveInstructionSchema
    ),
    exerciseTime: zod
      .lazy((): z.ZodTypeAny => CdmBaseDatetimeBusinessCenterTimeSchema)
      .optional(),
    name: zod.string().optional(),
    replacementTradeIdentifier: zod
      .array(zod.lazy((): z.ZodTypeAny => CdmEventCommonTradeIdentifierSchema))
      .min(0)
      .optional(),
  })
);

export type CdmEventCommonExerciseInstruction = z.infer<
  typeof CdmEventCommonExerciseInstructionSchema
>;
