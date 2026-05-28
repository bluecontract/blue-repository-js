import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

export const CdmProductCommonSettlementShapingProvisionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/ShapingProvision']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      shapeSchedule: z
        .array(z.lazy(() => CdmObservableAssetMoneySchema))
        .min(1)
        .optional(),
    })
  );

export type CdmProductCommonSettlementShapingProvision = z.infer<
  typeof CdmProductCommonSettlementShapingProvisionSchema
>;
