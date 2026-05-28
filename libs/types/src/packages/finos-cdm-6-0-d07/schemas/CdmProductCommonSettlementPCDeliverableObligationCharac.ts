import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonSettlementPCDeliverableObligationCharacSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/PCDeliverableObligationCharac'
    ]
  )(
    z.object({
      applicable: z.boolean(),
      description: z.string().optional(),
      name: z.string().optional(),
      partialCashSettlement: z.boolean().optional(),
    })
  );

export type CdmProductCommonSettlementPCDeliverableObligationCharac = z.infer<
  typeof CdmProductCommonSettlementPCDeliverableObligationCharacSchema
>;
