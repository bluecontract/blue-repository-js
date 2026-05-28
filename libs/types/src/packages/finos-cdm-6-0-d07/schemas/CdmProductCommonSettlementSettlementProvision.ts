import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonSettlementShapingProvisionSchema } from './CdmProductCommonSettlementShapingProvision';

export const CdmProductCommonSettlementSettlementProvisionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/SettlementProvision'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      shapingProvisions: z
        .lazy(() => CdmProductCommonSettlementShapingProvisionSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementSettlementProvision = z.infer<
  typeof CdmProductCommonSettlementSettlementProvisionSchema
>;
