import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

const zod = z as any;

export const CdmProductCommonSettlementShapingProvisionSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/ShapingProvision']
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      shapeSchedule: zod
        .array(zod.lazy(() => CdmObservableAssetMoneySchema))
        .min(1)
        .optional(),
    })
  );

export type CdmProductCommonSettlementShapingProvision = z.infer<
  typeof CdmProductCommonSettlementShapingProvisionSchema
>;
