import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonAssetTypeEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/AssetTypeEnum']
  )(
    zod.enum(['Cash', 'Commodity', 'Other', 'Security'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonAssetTypeEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonAssetTypeEnumSchema
>;
