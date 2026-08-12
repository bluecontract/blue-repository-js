import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFroFloatingRateIndexCalculationMethodEnumSchema } from './CdmObservableAssetFroFloatingRateIndexCalculationMethodEnum';
import { CdmObservableAssetFroFloatingRateIndexCategoryEnumSchema } from './CdmObservableAssetFroFloatingRateIndexCategoryEnum';
import { CdmObservableAssetFroFloatingRateIndexStyleEnumSchema } from './CdmObservableAssetFroFloatingRateIndexStyleEnum';

const zod = z as any;

export const CdmObservableAssetFroFloatingRateIndexCalculationDefaultsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/fro/FloatingRateIndexCalculationDefaults'
    ]
  )(
    zod.object({
      category: zod
        .lazy(() => CdmObservableAssetFroFloatingRateIndexCategoryEnumSchema)
        .optional(),
      description: zod.string().optional(),
      indexStyle: zod
        .lazy(() => CdmObservableAssetFroFloatingRateIndexStyleEnumSchema)
        .optional(),
      method: zod
        .lazy(
          () =>
            CdmObservableAssetFroFloatingRateIndexCalculationMethodEnumSchema
        )
        .optional(),
      name: zod.string().optional(),
    })
  );

export type CdmObservableAssetFroFloatingRateIndexCalculationDefaults = z.infer<
  typeof CdmObservableAssetFroFloatingRateIndexCalculationDefaultsSchema
>;
