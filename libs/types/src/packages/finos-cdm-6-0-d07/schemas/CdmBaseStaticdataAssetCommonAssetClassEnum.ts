import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonAssetClassEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/AssetClassEnum']
  )(
    z.enum([
      'Commodity',
      'Credit',
      'Equity',
      'ForeignExchange',
      'InterestRate',
      'MoneyMarket',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonAssetClassEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonAssetClassEnumSchema
>;
