import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonAssetTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/AssetTypeEnum']
  )(
    z.enum(['Cash', 'Commodity', 'Other', 'Security'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonAssetTypeEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonAssetTypeEnumSchema
>;
