import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonSettlementScheduledTransferEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/ScheduledTransferEnum'
    ]
  )(
    zod.enum([
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
