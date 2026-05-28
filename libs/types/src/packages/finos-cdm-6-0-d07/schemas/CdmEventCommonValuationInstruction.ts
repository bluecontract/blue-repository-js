import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonValuationSchema } from './CdmEventCommonValuation';

export const CdmEventCommonValuationInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ValuationInstruction']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      replace: z.boolean(),
      valuation: z
        .array(z.lazy(() => CdmEventCommonValuationSchema))
        .min(1)
        .optional(),
    })
  );

export type CdmEventCommonValuationInstruction = z.infer<
  typeof CdmEventCommonValuationInstructionSchema
>;
