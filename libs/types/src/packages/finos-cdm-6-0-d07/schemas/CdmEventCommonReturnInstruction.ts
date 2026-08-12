import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';

const zod = z as any;

export const CdmEventCommonReturnInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ReturnInstruction']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    quantity: zod
      .array(zod.lazy(() => CdmBaseMathQuantitySchema))
      .min(1)
      .optional(),
  })
);

export type CdmEventCommonReturnInstruction = z.infer<
  typeof CdmEventCommonReturnInstructionSchema
>;
