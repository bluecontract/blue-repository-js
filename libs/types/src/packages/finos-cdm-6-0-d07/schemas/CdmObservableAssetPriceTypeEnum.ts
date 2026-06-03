import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetPriceTypeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PriceTypeEnum']
)(
  zod.enum([
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
