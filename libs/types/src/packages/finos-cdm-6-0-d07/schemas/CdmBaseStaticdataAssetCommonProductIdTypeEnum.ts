import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonProductIdTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/ProductIdTypeEnum'
    ]
  )(
    z.enum([
      'BBGID',
      'BBGTICKER',
      'CUSIP',
      'FIGI',
      'ISDACRP',
      'ISIN',
      'Name',
      'Other',
      'RIC',
      'SEDOL',
      'Sicovam',
      'UPI',
      'Wertpapier',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonProductIdTypeEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonProductIdTypeEnumSchema
>;
