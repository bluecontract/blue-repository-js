import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFroFloatingRateIndexCalculationMethodEnumSchema } from './CdmObservableAssetFroFloatingRateIndexCalculationMethodEnum';
import { CdmObservableAssetFroFloatingRateIndexCategoryEnumSchema } from './CdmObservableAssetFroFloatingRateIndexCategoryEnum';
import { CdmObservableAssetFroFloatingRateIndexStyleEnumSchema } from './CdmObservableAssetFroFloatingRateIndexStyleEnum';

export const CdmObservableAssetFroFloatingRateIndexCalculationDefaultsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/fro/FloatingRateIndexCalculationDefaults'
    ]
  )(
    z.object({
      category: z
        .lazy(() => CdmObservableAssetFroFloatingRateIndexCategoryEnumSchema)
        .optional(),
      description: z.string().optional(),
      indexStyle: z
        .lazy(() => CdmObservableAssetFroFloatingRateIndexStyleEnumSchema)
        .optional(),
      method: z
        .lazy(
          () =>
            CdmObservableAssetFroFloatingRateIndexCalculationMethodEnumSchema
        )
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmObservableAssetFroFloatingRateIndexCalculationDefaults = z.infer<
  typeof CdmObservableAssetFroFloatingRateIndexCalculationDefaultsSchema
>;
