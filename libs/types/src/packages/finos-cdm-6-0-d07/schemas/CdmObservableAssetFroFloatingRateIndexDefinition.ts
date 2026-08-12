import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFroFloatingRateIndexCalculationDefaultsSchema } from './CdmObservableAssetFroFloatingRateIndexCalculationDefaults';
import { CdmObservableAssetFroFloatingRateIndexIdentificationSchema } from './CdmObservableAssetFroFloatingRateIndexIdentification';

const zod = z as any;

export const CdmObservableAssetFroFloatingRateIndexDefinitionSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/fro/FloatingRateIndexDefinition'
    ]
  )(
    zod.object({
      calculationDefaults: zod
        .lazy(
          () => CdmObservableAssetFroFloatingRateIndexCalculationDefaultsSchema
        )
        .optional(),
      fro: zod.lazy(
        () => CdmObservableAssetFroFloatingRateIndexIdentificationSchema
      ),
      name: zod.string().optional(),
    })
  );

export type CdmObservableAssetFroFloatingRateIndexDefinition = z.infer<
  typeof CdmObservableAssetFroFloatingRateIndexDefinitionSchema
>;
