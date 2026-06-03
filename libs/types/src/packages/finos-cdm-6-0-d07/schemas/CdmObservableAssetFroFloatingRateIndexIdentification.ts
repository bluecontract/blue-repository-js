import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonISOCurrencyCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCurrencyCodeEnum';
import { CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnum';

const zod = z as any;

export const CdmObservableAssetFroFloatingRateIndexIdentificationSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/fro/FloatingRateIndexIdentification'
    ]
  )(
    zod.object({
      currency: zod
        .lazy(() => CdmBaseStaticdataAssetCommonISOCurrencyCodeEnumSchema)
        .optional(),
      floatingRateIndex: zod
        .lazy(
          () =>
            CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema
        )
        .optional(),
      froType: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmObservableAssetFroFloatingRateIndexIdentification = z.infer<
  typeof CdmObservableAssetFroFloatingRateIndexIdentificationSchema
>;
