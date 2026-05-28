import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema } from './CdmBaseDatetimeAdjustableRelativeOrPeriodicDates';
import { CdmProductCommonSettlementPrincipalPaymentSchema } from './CdmProductCommonSettlementPrincipalPayment';

export const CdmProductCommonSettlementPrincipalPaymentScheduleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/PrincipalPaymentSchedule'
    ]
  )(
    z.object({
      description: z.string().optional(),
      finalPrincipalPayment: z
        .lazy(() => CdmProductCommonSettlementPrincipalPaymentSchema)
        .optional(),
      initialPrincipalPayment: z
        .lazy(() => CdmProductCommonSettlementPrincipalPaymentSchema)
        .optional(),
      intermediatePrincipalPayment: z
        .lazy(() => CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCommonSettlementPrincipalPaymentSchedule = z.infer<
  typeof CdmProductCommonSettlementPrincipalPaymentScheduleSchema
>;
