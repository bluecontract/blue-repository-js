import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetQuotedCurrencyPairSchema } from './CdmObservableAssetQuotedCurrencyPair';

const zod = z as any;

export const CdmObservableAssetFxRateSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FxRate']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    quotedCurrencyPair: zod.lazy(
      () => CdmObservableAssetQuotedCurrencyPairSchema
    ),
    rate: zod.number().optional(),
  })
);

export type CdmObservableAssetFxRate = z.infer<
  typeof CdmObservableAssetFxRateSchema
>;
