import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonFundProductTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/FundProductTypeEnum'
    ]
  )(
    z.enum([
      'ExchangeTradedFund',
      'MoneyMarketFund',
      'MutualFund',
      'OtherFund',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonFundProductTypeEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonFundProductTypeEnumSchema
>;
