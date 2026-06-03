import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonPrimitiveInstructionSchema } from './CdmEventCommonPrimitiveInstruction';

const zod = z as any;

export const CdmEventCommonSplitInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/SplitInstruction']
)(
  zod.object({
    breakdown: zod
      .array(
        zod.lazy((): z.ZodTypeAny => CdmEventCommonPrimitiveInstructionSchema)
      )
      .min(1)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmEventCommonSplitInstruction = z.infer<
  typeof CdmEventCommonSplitInstructionSchema
>;
