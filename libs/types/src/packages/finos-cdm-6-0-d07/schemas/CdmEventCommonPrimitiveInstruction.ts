import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonContractFormationInstructionSchema } from './CdmEventCommonContractFormationInstruction';
import { CdmEventCommonExecutionInstructionSchema } from './CdmEventCommonExecutionInstruction';
import { CdmEventCommonExerciseInstructionSchema } from './CdmEventCommonExerciseInstruction';
import { CdmEventCommonIndexTransitionInstructionSchema } from './CdmEventCommonIndexTransitionInstruction';
import { CdmEventCommonObservationInstructionSchema } from './CdmEventCommonObservationInstruction';
import { CdmEventCommonPartyChangeInstructionSchema } from './CdmEventCommonPartyChangeInstruction';
import { CdmEventCommonQuantityChangeInstructionSchema } from './CdmEventCommonQuantityChangeInstruction';
import { CdmEventCommonResetInstructionSchema } from './CdmEventCommonResetInstruction';
import { CdmEventCommonSplitInstructionSchema } from './CdmEventCommonSplitInstruction';
import { CdmEventCommonStockSplitInstructionSchema } from './CdmEventCommonStockSplitInstruction';
import { CdmEventCommonTermsChangeInstructionSchema } from './CdmEventCommonTermsChangeInstruction';
import { CdmEventCommonTransferInstructionSchema } from './CdmEventCommonTransferInstruction';
import { CdmEventCommonValuationInstructionSchema } from './CdmEventCommonValuationInstruction';

export const CdmEventCommonPrimitiveInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/PrimitiveInstruction']
  )(
    z.object({
      contractFormation: z
        .lazy(
          (): z.ZodTypeAny => CdmEventCommonContractFormationInstructionSchema
        )
        .optional(),
      description: z.string().optional(),
      execution: z
        .lazy((): z.ZodTypeAny => CdmEventCommonExecutionInstructionSchema)
        .optional(),
      exercise: z
        .lazy((): z.ZodTypeAny => CdmEventCommonExerciseInstructionSchema)
        .optional(),
      indexTransition: z
        .lazy(
          (): z.ZodTypeAny => CdmEventCommonIndexTransitionInstructionSchema
        )
        .optional(),
      name: z.string().optional(),
      observation: z
        .lazy((): z.ZodTypeAny => CdmEventCommonObservationInstructionSchema)
        .optional(),
      partyChange: z
        .lazy((): z.ZodTypeAny => CdmEventCommonPartyChangeInstructionSchema)
        .optional(),
      quantityChange: z
        .lazy((): z.ZodTypeAny => CdmEventCommonQuantityChangeInstructionSchema)
        .optional(),
      reset: z
        .lazy((): z.ZodTypeAny => CdmEventCommonResetInstructionSchema)
        .optional(),
      split: z
        .lazy((): z.ZodTypeAny => CdmEventCommonSplitInstructionSchema)
        .optional(),
      stockSplit: z
        .lazy((): z.ZodTypeAny => CdmEventCommonStockSplitInstructionSchema)
        .optional(),
      termsChange: z
        .lazy((): z.ZodTypeAny => CdmEventCommonTermsChangeInstructionSchema)
        .optional(),
      transfer: z
        .lazy((): z.ZodTypeAny => CdmEventCommonTransferInstructionSchema)
        .optional(),
      valuation: z
        .lazy((): z.ZodTypeAny => CdmEventCommonValuationInstructionSchema)
        .optional(),
    })
  );

export type CdmEventCommonPrimitiveInstruction = z.infer<
  typeof CdmEventCommonPrimitiveInstructionSchema
>;
