import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTradeState';
import { CdmEventCommonPrimitiveInstructionSchema } from './CdmEventCommonPrimitiveInstruction';

const zod = z as any;

export const CdmEventCommonInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/Instruction']
)(
  zod.object({
    before: zod
      .lazy(() => CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    primitiveInstruction: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonPrimitiveInstructionSchema)
      .optional(),
  })
);

export type CdmEventCommonInstruction = z.infer<
  typeof CdmEventCommonInstructionSchema
>;
