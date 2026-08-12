import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetQuotedCurrencyPairSchema } from './CdmObservableAssetQuotedCurrencyPair';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmObservableAssetFieldWithMetaQuotedCurrencyPairSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaQuotedCurrencyPair'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmObservableAssetQuotedCurrencyPairSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaQuotedCurrencyPair = z.infer<
  typeof CdmObservableAssetFieldWithMetaQuotedCurrencyPairSchema
>;
