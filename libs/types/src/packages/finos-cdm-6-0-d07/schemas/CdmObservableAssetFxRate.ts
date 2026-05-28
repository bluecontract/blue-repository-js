import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetQuotedCurrencyPairSchema } from './CdmObservableAssetQuotedCurrencyPair';

export const CdmObservableAssetFxRateSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FxRate']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    quotedCurrencyPair: z.lazy(
      () => CdmObservableAssetQuotedCurrencyPairSchema
    ),
    rate: z.number().optional(),
  })
);

export type CdmObservableAssetFxRate = z.infer<
  typeof CdmObservableAssetFxRateSchema
>;
