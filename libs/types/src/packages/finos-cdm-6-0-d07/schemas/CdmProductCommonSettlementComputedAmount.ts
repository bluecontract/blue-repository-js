import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmProductCommonSettlementComputedAmountSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/ComputedAmount']
  )(
    zod.object({
      amount: zod.number(),
      callFunction: zod.string(),
      currency: zod
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductCommonSettlementComputedAmount = z.infer<
  typeof CdmProductCommonSettlementComputedAmountSchema
>;
