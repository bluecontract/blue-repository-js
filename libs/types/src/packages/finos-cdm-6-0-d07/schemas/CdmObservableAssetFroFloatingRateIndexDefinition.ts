import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFroFloatingRateIndexCalculationDefaultsSchema } from './CdmObservableAssetFroFloatingRateIndexCalculationDefaults';
import { CdmObservableAssetFroFloatingRateIndexIdentificationSchema } from './CdmObservableAssetFroFloatingRateIndexIdentification';

export const CdmObservableAssetFroFloatingRateIndexDefinitionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/fro/FloatingRateIndexDefinition'
    ]
  )(
    z.object({
      calculationDefaults: z
        .lazy(
          () => CdmObservableAssetFroFloatingRateIndexCalculationDefaultsSchema
        )
        .optional(),
      fro: z.lazy(
        () => CdmObservableAssetFroFloatingRateIndexIdentificationSchema
      ),
      name: z.string().optional(),
    })
  );

export type CdmObservableAssetFroFloatingRateIndexDefinition = z.infer<
  typeof CdmObservableAssetFroFloatingRateIndexDefinitionSchema
>;
