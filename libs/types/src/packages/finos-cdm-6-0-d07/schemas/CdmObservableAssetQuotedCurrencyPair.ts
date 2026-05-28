import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetQuoteBasisEnumSchema } from './CdmObservableAssetQuoteBasisEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmObservableAssetQuotedCurrencyPairSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/QuotedCurrencyPair']
  )(
    z.object({
      currency1: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      currency2: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      description: z.string().optional(),
      name: z.string().optional(),
      quoteBasis: z.lazy(() => CdmObservableAssetQuoteBasisEnumSchema),
    })
  );

export type CdmObservableAssetQuotedCurrencyPair = z.infer<
  typeof CdmObservableAssetQuotedCurrencyPairSchema
>;
