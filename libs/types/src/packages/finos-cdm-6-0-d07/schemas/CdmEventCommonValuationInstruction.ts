import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonValuationSchema } from './CdmEventCommonValuation';

const zod = z as any;

export const CdmEventCommonValuationInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ValuationInstruction']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    replace: zod.boolean(),
    valuation: zod
      .array(zod.lazy(() => CdmEventCommonValuationSchema))
      .min(1)
      .optional(),
  })
);

export type CdmEventCommonValuationInstruction = z.infer<
  typeof CdmEventCommonValuationInstructionSchema
>;
