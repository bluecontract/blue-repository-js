import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';

export const CdmEventCommonReturnInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ReturnInstruction']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      quantity: z
        .array(z.lazy(() => CdmBaseMathQuantitySchema))
        .min(1)
        .optional(),
    })
  );

export type CdmEventCommonReturnInstruction = z.infer<
  typeof CdmEventCommonReturnInstructionSchema
>;
