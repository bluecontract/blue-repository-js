import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonSettlementLoanParticipationSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/LoanParticipation']
  )(
    zod.object({
      applicable: zod.boolean().optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      partialCashSettlement: zod.boolean().optional(),
      qualifyingParticipationSeller: zod.string().optional(),
    })
  );

export type CdmProductCommonSettlementLoanParticipation = z.infer<
  typeof CdmProductCommonSettlementLoanParticipationSchema
>;
