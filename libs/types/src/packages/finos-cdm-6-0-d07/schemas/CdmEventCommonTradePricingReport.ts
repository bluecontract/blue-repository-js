import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeTimeZoneSchema } from './CdmBaseDatetimeTimeZone';
import { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
import { CdmEventCommonTradeSchema } from './CdmEventCommonTrade';

const zod = z as any;

export const CdmEventCommonTradePricingReportSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/TradePricingReport']
)(
  zod.object({
    description: zod.string().optional(),
    discountingIndex: zod
      .lazy(() => CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema)
      .optional(),
    name: zod.string().optional(),
    pricingTime: zod.lazy(() => CdmBaseDatetimeTimeZoneSchema),
    trade: zod.lazy(() => CdmEventCommonTradeSchema),
  })
);

export type CdmEventCommonTradePricingReport = z.infer<
  typeof CdmEventCommonTradePricingReportSchema
>;
