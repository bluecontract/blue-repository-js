import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema } from './CdmBaseDatetimeAdjustableRelativeOrPeriodicDates';
import { CdmProductCommonSettlementPrincipalPaymentSchema } from './CdmProductCommonSettlementPrincipalPayment';

const zod = z as any;

export const CdmProductCommonSettlementPrincipalPaymentScheduleSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/PrincipalPaymentSchedule'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      finalPrincipalPayment: zod
        .lazy(() => CdmProductCommonSettlementPrincipalPaymentSchema)
        .optional(),
      initialPrincipalPayment: zod
        .lazy(() => CdmProductCommonSettlementPrincipalPaymentSchema)
        .optional(),
      intermediatePrincipalPayment: zod
        .lazy(() => CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema)
        .optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductCommonSettlementPrincipalPaymentSchedule = z.infer<
  typeof CdmProductCommonSettlementPrincipalPaymentScheduleSchema
>;
