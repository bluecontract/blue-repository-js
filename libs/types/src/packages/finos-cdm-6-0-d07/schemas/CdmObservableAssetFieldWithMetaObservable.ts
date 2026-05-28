import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetObservableSchema } from './CdmObservableAssetObservable';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmObservableAssetFieldWithMetaObservableSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaObservable']
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.lazy(() => CdmObservableAssetObservableSchema).optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaObservable = z.infer<
  typeof CdmObservableAssetFieldWithMetaObservableSchema
>;
