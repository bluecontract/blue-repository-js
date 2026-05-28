import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonSettlementPrincipalPaymentScheduleSchema } from './CdmProductCommonSettlementPrincipalPaymentSchedule';

export const CdmProductCommonSettlementPrincipalPaymentsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/PrincipalPayments']
  )(
    z.object({
      description: z.string().optional(),
      finalPayment: z.boolean(),
      initialPayment: z.boolean(),
      intermediatePayment: z.boolean(),
      name: z.string().optional(),
      principalPaymentSchedule: z
        .lazy(() => CdmProductCommonSettlementPrincipalPaymentScheduleSchema)
        .optional(),
      varyingLegNotionalCurrency: z.array(z.string()).min(0).optional(),
    })
  );

export type CdmProductCommonSettlementPrincipalPayments = z.infer<
  typeof CdmProductCommonSettlementPrincipalPaymentsSchema
>;
