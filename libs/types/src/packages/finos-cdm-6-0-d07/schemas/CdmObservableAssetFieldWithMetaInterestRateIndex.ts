import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetInterestRateIndexSchema } from './CdmObservableAssetInterestRateIndex';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmObservableAssetFieldWithMetaInterestRateIndexSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaInterestRateIndex'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.lazy(() => CdmObservableAssetInterestRateIndexSchema).optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaInterestRateIndex = z.infer<
  typeof CdmObservableAssetFieldWithMetaInterestRateIndexSchema
>;
