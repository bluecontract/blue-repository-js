import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
import { CdmObservableAssetQuotationSideEnumSchema } from './CdmObservableAssetQuotationSideEnum';

const zod = z as any;

export const CdmObservableAssetSwapCurveValuationSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/SwapCurveValuation']
)(
  zod.object({
    description: zod.string().optional(),
    floatingRateIndex: zod.lazy(
      () => CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema
    ),
    indexTenor: zod.lazy(() => CdmBaseDatetimePeriodSchema).optional(),
    name: zod.string().optional(),
    side: zod.lazy(() => CdmObservableAssetQuotationSideEnumSchema).optional(),
    spread: zod.number(),
  })
);

export type CdmObservableAssetSwapCurveValuation = z.infer<
  typeof CdmObservableAssetSwapCurveValuationSchema
>;
