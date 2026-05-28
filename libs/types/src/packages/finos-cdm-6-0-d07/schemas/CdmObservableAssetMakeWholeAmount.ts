import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
import { CdmObservableAssetInterpolationMethodEnumSchema } from './CdmObservableAssetInterpolationMethodEnum';
import { CdmObservableAssetQuotationSideEnumSchema } from './CdmObservableAssetQuotationSideEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmObservableAssetMakeWholeAmountSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/MakeWholeAmount']
  )(
    z.object({
      description: z.string().optional(),
      earlyCallDate: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      floatingRateIndex: z
        .lazy(() => CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema)
        .optional(),
      indexTenor: z.lazy(() => CdmBaseDatetimePeriodSchema).optional(),
      interpolationMethod: z
        .lazy(() => CdmObservableAssetInterpolationMethodEnumSchema)
        .optional(),
      name: z.string().optional(),
      side: z.lazy(() => CdmObservableAssetQuotationSideEnumSchema).optional(),
      spread: z.number().optional(),
    })
  );

export type CdmObservableAssetMakeWholeAmount = z.infer<
  typeof CdmObservableAssetMakeWholeAmountSchema
>;
