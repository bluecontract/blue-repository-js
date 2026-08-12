import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonSettlementPCDeliverableObligationCharacSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/PCDeliverableObligationCharac'
    ]
  )(
    zod.object({
      applicable: zod.boolean(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      partialCashSettlement: zod.boolean().optional(),
    })
  );

export type CdmProductCommonSettlementPCDeliverableObligationCharac = z.infer<
  typeof CdmProductCommonSettlementPCDeliverableObligationCharacSchema
>;
