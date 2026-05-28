import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonISOCurrencyCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCurrencyCodeEnum';
import { CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnum';

export const CdmObservableAssetFroFloatingRateIndexIdentificationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/fro/FloatingRateIndexIdentification'
    ]
  )(
    z.object({
      currency: z
        .lazy(() => CdmBaseStaticdataAssetCommonISOCurrencyCodeEnumSchema)
        .optional(),
      floatingRateIndex: z
        .lazy(
          () =>
            CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema
        )
        .optional(),
      froType: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmObservableAssetFroFloatingRateIndexIdentification = z.infer<
  typeof CdmObservableAssetFroFloatingRateIndexIdentificationSchema
>;
