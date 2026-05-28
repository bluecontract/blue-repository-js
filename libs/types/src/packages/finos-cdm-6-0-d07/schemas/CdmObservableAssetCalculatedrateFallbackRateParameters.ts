import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
import { CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema } from './CdmObservableAssetCalculatedrateFloatingRateCalculationParameters';

export const CdmObservableAssetCalculatedrateFallbackRateParametersSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/FallbackRateParameters'
    ]
  )(
    z.object({
      calculationParameters: z
        .lazy(
          () =>
            CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema
        )
        .optional(),
      description: z.string().optional(),
      effectiveDate: z.string().optional(),
      floatingRateIndex: z.lazy(
        () => CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema
      ),
      name: z.string().optional(),
      spreadAdjustment: z.number().optional(),
    })
  );

export type CdmObservableAssetCalculatedrateFallbackRateParameters = z.infer<
  typeof CdmObservableAssetCalculatedrateFallbackRateParametersSchema
>;
