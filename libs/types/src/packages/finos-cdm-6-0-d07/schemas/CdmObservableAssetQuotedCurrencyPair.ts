import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetQuoteBasisEnumSchema } from './CdmObservableAssetQuoteBasisEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmObservableAssetQuotedCurrencyPairSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/QuotedCurrencyPair']
)(
  zod.object({
    currency1: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
    currency2: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
    description: zod.string().optional(),
    name: zod.string().optional(),
    quoteBasis: zod.lazy(() => CdmObservableAssetQuoteBasisEnumSchema),
  })
);

export type CdmObservableAssetQuotedCurrencyPair = z.infer<
  typeof CdmObservableAssetQuotedCurrencyPairSchema
>;
