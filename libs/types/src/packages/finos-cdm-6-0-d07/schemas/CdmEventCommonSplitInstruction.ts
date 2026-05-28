import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonPrimitiveInstructionSchema } from './CdmEventCommonPrimitiveInstruction';

export const CdmEventCommonSplitInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/SplitInstruction']
  )(
    z.object({
      breakdown: z
        .array(
          z.lazy((): z.ZodTypeAny => CdmEventCommonPrimitiveInstructionSchema)
        )
        .min(1)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmEventCommonSplitInstruction = z.infer<
  typeof CdmEventCommonSplitInstructionSchema
>;
