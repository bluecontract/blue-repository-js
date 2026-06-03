import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonAssetClassEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/AssetClassEnum']
  )(
    zod.enum([
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
