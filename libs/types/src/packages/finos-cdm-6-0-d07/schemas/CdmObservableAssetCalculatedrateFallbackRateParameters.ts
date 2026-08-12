import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
import { CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema } from './CdmObservableAssetCalculatedrateFloatingRateCalculationParameters';

const zod = z as any;

export const CdmObservableAssetCalculatedrateFallbackRateParametersSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/FallbackRateParameters'
    ]
  )(
    zod.object({
      calculationParameters: zod
        .lazy(
          () =>
            CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema
        )
        .optional(),
      description: zod.string().optional(),
      effectiveDate: zod.string().optional(),
      floatingRateIndex: zod.lazy(
        () => CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema
      ),
      name: zod.string().optional(),
      spreadAdjustment: zod.number().optional(),
    })
  );

export type CdmObservableAssetCalculatedrateFallbackRateParameters = z.infer<
  typeof CdmObservableAssetCalculatedrateFallbackRateParametersSchema
>;
