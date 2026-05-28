import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmMarginScheduleStandardizedScheduleProductClassEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/margin/schedule/StandardizedScheduleProductClassEnum'
    ]
  )(
    z.enum([
      'BasisSwap',
      'ContractForDifference',
      'CorrelationSwap',
      'CreditNthToDefault',
      'CreditTotalReturnSwapOnABond',
      'CrossCurrencySwap',
      'DeliverableForward',
      'DeliverableOption',
      'DeliverableOptionF',
      'DeliverableSwap',
      'DividendSwap',
      'FixedFloatSwap',
      'Forward',
      'ForwardRateAgreement',
      'IRExoticSwapWithAnExoticCouponAgainstAFloatingLeg',
      'IndexCDS',
      'IndexTranche',
      'NonDeliverableCrossCurrencySwap',
      'NonDeliverableForward',
      'NonDeliverableOption',
      'Option',
      'SingleNameCreditDefaultSwap',
      'Swap',
      'SwapWithCallableBermudanRightToEnterExitSwaps',
      'SwapsAndPortfolioSwaps',
      'Swaption',
      'SwaptionStraddle',
      'VarianceSwap',
      'VolatilitySwap',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmMarginScheduleStandardizedScheduleProductClassEnum = z.infer<
  typeof CdmMarginScheduleStandardizedScheduleProductClassEnumSchema
>;
