import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
import { CdmObservableAssetInterpolationMethodEnumSchema } from './CdmObservableAssetInterpolationMethodEnum';
import { CdmObservableAssetQuotationSideEnumSchema } from './CdmObservableAssetQuotationSideEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmObservableAssetMakeWholeAmountSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/MakeWholeAmount']
)(
  zod.object({
    description: zod.string().optional(),
    earlyCallDate: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
    floatingRateIndex: zod
      .lazy(() => CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema)
      .optional(),
    indexTenor: zod.lazy(() => CdmBaseDatetimePeriodSchema).optional(),
    interpolationMethod: zod
      .lazy(() => CdmObservableAssetInterpolationMethodEnumSchema)
      .optional(),
    name: zod.string().optional(),
    side: zod.lazy(() => CdmObservableAssetQuotationSideEnumSchema).optional(),
    spread: zod.number().optional(),
  })
);

export type CdmObservableAssetMakeWholeAmount = z.infer<
  typeof CdmObservableAssetMakeWholeAmountSchema
>;
