import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmProductCommonSettlementComputedAmountSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/ComputedAmount']
  )(
    z.object({
      amount: z.number(),
      callFunction: z.string(),
      currency: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCommonSettlementComputedAmount = z.infer<
  typeof CdmProductCommonSettlementComputedAmountSchema
>;
