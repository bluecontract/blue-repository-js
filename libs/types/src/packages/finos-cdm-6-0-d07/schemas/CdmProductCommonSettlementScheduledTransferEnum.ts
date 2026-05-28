import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonSettlementScheduledTransferEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/ScheduledTransferEnum'
    ]
  )(
    z.enum([
      'CorporateAction',
      'Coupon',
      'CreditEvent',
      'DividendReturn',
      'Exercise',
      'FixedRateReturn',
      'FloatingRateReturn',
      'FractionalAmount',
      'InterestReturn',
      'NetInterest',
      'Performance',
      'PrincipalPayment',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductCommonSettlementScheduledTransferEnum = z.infer<
  typeof CdmProductCommonSettlementScheduledTransferEnumSchema
>;
