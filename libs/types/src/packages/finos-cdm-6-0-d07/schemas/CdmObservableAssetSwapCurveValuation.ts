import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
import { CdmObservableAssetQuotationSideEnumSchema } from './CdmObservableAssetQuotationSideEnum';

export const CdmObservableAssetSwapCurveValuationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/SwapCurveValuation']
  )(
    z.object({
      description: z.string().optional(),
      floatingRateIndex: z.lazy(
        () => CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema
      ),
      indexTenor: z.lazy(() => CdmBaseDatetimePeriodSchema).optional(),
      name: z.string().optional(),
      side: z.lazy(() => CdmObservableAssetQuotationSideEnumSchema).optional(),
      spread: z.number(),
    })
  );

export type CdmObservableAssetSwapCurveValuation = z.infer<
  typeof CdmObservableAssetSwapCurveValuationSchema
>;
