import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonSettlementCashSettlementMethodEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/CashSettlementMethodEnum'
    ]
  )(
    zod.enum([
      'CashPriceAlternateMethod',
      'CashPriceMethod',
      'CollateralizedCashPriceMethod',
      'CrossCurrencyMethod',
      'MidMarketCalculationAgentDetermination',
      'MidMarketIndicativeQuotations',
      'MidMarketIndicativeQuotationsAlternate',
      'ParYieldCurveAdjustedMethod',
      'ParYieldCurveUnadjustedMethod',
      'ReplacementValueCalculationAgentDetermination',
      'ReplacementValueFirmQuotations',
      'ZeroCouponYieldAdjustedMethod',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductCommonSettlementCashSettlementMethodEnum = z.infer<
  typeof CdmProductCommonSettlementCashSettlementMethodEnumSchema
>;
