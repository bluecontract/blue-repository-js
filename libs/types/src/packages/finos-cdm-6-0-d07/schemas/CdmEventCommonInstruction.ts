import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTradeState';
import { CdmEventCommonPrimitiveInstructionSchema } from './CdmEventCommonPrimitiveInstruction';

export const CdmEventCommonInstructionSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/Instruction']
)(
  z.object({
    before: z
      .lazy(() => CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema)
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    primitiveInstruction: z
      .lazy((): z.ZodTypeAny => CdmEventCommonPrimitiveInstructionSchema)
      .optional(),
  })
);

export type CdmEventCommonInstruction = z.infer<
  typeof CdmEventCommonInstructionSchema
>;
