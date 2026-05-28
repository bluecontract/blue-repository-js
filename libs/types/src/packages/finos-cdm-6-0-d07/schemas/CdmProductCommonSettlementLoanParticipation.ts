import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonSettlementLoanParticipationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/LoanParticipation']
  )(
    z.object({
      applicable: z.boolean().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      partialCashSettlement: z.boolean().optional(),
      qualifyingParticipationSeller: z.string().optional(),
    })
  );

export type CdmProductCommonSettlementLoanParticipation = z.infer<
  typeof CdmProductCommonSettlementLoanParticipationSchema
>;
