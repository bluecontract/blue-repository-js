import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonSettlementShapingProvisionSchema } from './CdmProductCommonSettlementShapingProvision';

const zod = z as any;

export const CdmProductCommonSettlementSettlementProvisionSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/SettlementProvision'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      shapingProvisions: zod
        .lazy(() => CdmProductCommonSettlementShapingProvisionSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementSettlementProvision = z.infer<
  typeof CdmProductCommonSettlementSettlementProvisionSchema
>;
