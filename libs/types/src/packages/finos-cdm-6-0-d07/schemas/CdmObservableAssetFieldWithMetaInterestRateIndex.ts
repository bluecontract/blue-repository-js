import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetInterestRateIndexSchema } from './CdmObservableAssetInterestRateIndex';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmObservableAssetFieldWithMetaInterestRateIndexSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaInterestRateIndex'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod.lazy(() => CdmObservableAssetInterestRateIndexSchema).optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaInterestRateIndex = z.infer<
  typeof CdmObservableAssetFieldWithMetaInterestRateIndexSchema
>;
