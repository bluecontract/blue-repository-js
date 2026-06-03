import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonSettlementPrincipalPaymentScheduleSchema } from './CdmProductCommonSettlementPrincipalPaymentSchedule';

const zod = z as any;

export const CdmProductCommonSettlementPrincipalPaymentsSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/PrincipalPayments']
  )(
    zod.object({
      description: zod.string().optional(),
      finalPayment: zod.boolean(),
      initialPayment: zod.boolean(),
      intermediatePayment: zod.boolean(),
      name: zod.string().optional(),
      principalPaymentSchedule: zod
        .lazy(() => CdmProductCommonSettlementPrincipalPaymentScheduleSchema)
        .optional(),
      varyingLegNotionalCurrency: zod.array(zod.string()).min(0).optional(),
    })
  );

export type CdmProductCommonSettlementPrincipalPayments = z.infer<
  typeof CdmProductCommonSettlementPrincipalPaymentsSchema
>;
