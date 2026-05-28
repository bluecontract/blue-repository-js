import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCreditNotationSchema } from './CdmObservableAssetCreditNotation';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmObservableAssetFieldWithMetaCreditNotationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaCreditNotation'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.lazy(() => CdmObservableAssetCreditNotationSchema).optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaCreditNotation = z.infer<
  typeof CdmObservableAssetFieldWithMetaCreditNotationSchema
>;
