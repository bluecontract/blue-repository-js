import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetObservableSchema } from './CdmObservableAssetObservable';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmObservableAssetFieldWithMetaObservableSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaObservable']
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod.lazy(() => CdmObservableAssetObservableSchema).optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaObservable = z.infer<
  typeof CdmObservableAssetFieldWithMetaObservableSchema
>;
