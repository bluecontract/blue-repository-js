import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeTimeZoneSchema } from './CdmBaseDatetimeTimeZone';
import { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
import { CdmEventCommonTradeSchema } from './CdmEventCommonTrade';

export const CdmEventCommonTradePricingReportSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/TradePricingReport']
  )(
    z.object({
      description: z.string().optional(),
      discountingIndex: z
        .lazy(() => CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema)
        .optional(),
      name: z.string().optional(),
      pricingTime: z.lazy(() => CdmBaseDatetimeTimeZoneSchema),
      trade: z.lazy(() => CdmEventCommonTradeSchema),
    })
  );

export type CdmEventCommonTradePricingReport = z.infer<
  typeof CdmEventCommonTradePricingReportSchema
>;
