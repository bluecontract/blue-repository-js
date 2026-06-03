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

const zod = z as any;

export const CdmEventCommonPrimitiveInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/PrimitiveInstruction']
)(
  zod.object({
    contractFormation: zod
      .lazy(
        (): z.ZodTypeAny => CdmEventCommonContractFormationInstructionSchema
      )
      .optional(),
    description: zod.string().optional(),
    execution: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonExecutionInstructionSchema)
      .optional(),
    exercise: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonExerciseInstructionSchema)
      .optional(),
    indexTransition: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonIndexTransitionInstructionSchema)
      .optional(),
    name: zod.string().optional(),
    observation: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonObservationInstructionSchema)
      .optional(),
    partyChange: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonPartyChangeInstructionSchema)
      .optional(),
    quantityChange: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonQuantityChangeInstructionSchema)
      .optional(),
    reset: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonResetInstructionSchema)
      .optional(),
    split: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonSplitInstructionSchema)
      .optional(),
    stockSplit: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonStockSplitInstructionSchema)
      .optional(),
    termsChange: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonTermsChangeInstructionSchema)
      .optional(),
    transfer: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonTransferInstructionSchema)
      .optional(),
    valuation: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonValuationInstructionSchema)
      .optional(),
  })
);

export type CdmEventCommonPrimitiveInstruction = z.infer<
  typeof CdmEventCommonPrimitiveInstructionSchema
>;
