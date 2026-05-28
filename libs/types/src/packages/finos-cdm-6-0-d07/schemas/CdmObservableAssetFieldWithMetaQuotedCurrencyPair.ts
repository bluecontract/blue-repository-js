import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetQuotedCurrencyPairSchema } from './CdmObservableAssetQuotedCurrencyPair';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmObservableAssetFieldWithMetaQuotedCurrencyPairSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaQuotedCurrencyPair'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.lazy(() => CdmObservableAssetQuotedCurrencyPairSchema).optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaQuotedCurrencyPair = z.infer<
  typeof CdmObservableAssetFieldWithMetaQuotedCurrencyPairSchema
>;
