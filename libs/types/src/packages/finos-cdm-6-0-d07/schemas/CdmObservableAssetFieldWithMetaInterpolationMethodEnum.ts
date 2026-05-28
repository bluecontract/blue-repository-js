import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetInterpolationMethodEnumSchema } from './CdmObservableAssetInterpolationMethodEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmObservableAssetFieldWithMetaInterpolationMethodEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaInterpolationMethodEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmObservableAssetInterpolationMethodEnumSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaInterpolationMethodEnum = z.infer<
  typeof CdmObservableAssetFieldWithMetaInterpolationMethodEnumSchema
>;
