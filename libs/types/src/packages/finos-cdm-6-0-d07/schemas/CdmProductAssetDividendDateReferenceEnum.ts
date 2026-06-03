import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetDividendDateReferenceEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendDateReferenceEnum']
  )(
    zod.enum([
      'AdHocDate',
      'CashSettlePaymentDateExDiv',
      'CashSettlePaymentDateIssuerPayment',
      'CashSettlementPaymentDate',
      'CumulativeEquityExDiv',
      'CumulativeEquityExDivBeforeReset',
      'CumulativeEquityPaid',
      'CumulativeEquityPaidBeforeReset',
      'CumulativeEquityPaidInclReset',
      'CumulativeInterestExDiv',
      'CumulativeInterestPaid',
      'CumulativeInterestPaidBeforeReset',
      'CumulativeInterestPaidInclReset',
      'DividendPaymentDate',
      'DividendValuationDate',
      'EquityPaymentDate',
      'ExDate',
      'FloatingAmountPaymentDate',
      'FollowingPaymentDate',
      'RecordDate',
      'SharePayment',
      'TerminationDate',
      'TradeDate',
      'UnwindExDiv',
      'UnwindOrEquityExDiv',
      'UnwindOrEquityPaid',
      'UnwindOrInterestExDiv',
      'UnwindOrInterestPaid',
      'UnwindPaid',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetDividendDateReferenceEnum = z.infer<
  typeof CdmProductAssetDividendDateReferenceEnumSchema
>;
