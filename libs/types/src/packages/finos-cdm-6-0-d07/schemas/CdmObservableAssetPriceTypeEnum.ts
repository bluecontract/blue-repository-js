import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetPriceTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PriceTypeEnum']
  )(
    z.enum([
      'AssetPrice',
      'CashPrice',
      'Correlation',
      'Dividend',
      'ExchangeRate',
      'InterestRate',
      'Variance',
      'Volatility',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetPriceTypeEnum = z.infer<
  typeof CdmObservableAssetPriceTypeEnumSchema
>;
