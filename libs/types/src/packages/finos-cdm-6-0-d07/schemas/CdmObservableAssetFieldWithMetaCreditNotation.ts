import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCreditNotationSchema } from './CdmObservableAssetCreditNotation';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmObservableAssetFieldWithMetaCreditNotationSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaCreditNotation'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod.lazy(() => CdmObservableAssetCreditNotationSchema).optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaCreditNotation = z.infer<
  typeof CdmObservableAssetFieldWithMetaCreditNotationSchema
>;
