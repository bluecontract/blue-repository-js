import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetInterpolationMethodEnumSchema } from './CdmObservableAssetInterpolationMethodEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmObservableAssetFieldWithMetaInterpolationMethodEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaInterpolationMethodEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmObservableAssetInterpolationMethodEnumSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaInterpolationMethodEnum = z.infer<
  typeof CdmObservableAssetFieldWithMetaInterpolationMethodEnumSchema
>;
