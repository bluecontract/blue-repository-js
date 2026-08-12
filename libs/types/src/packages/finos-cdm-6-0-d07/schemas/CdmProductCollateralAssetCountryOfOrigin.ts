import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCountryCodeEnum';

const zod = z as any;

export const CdmProductCollateralAssetCountryOfOriginSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/AssetCountryOfOrigin']
  )(
    zod.object({
      assetCountryOfOrigin: zod.lazy(
        () => CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema
      ),
      name: zod.string().optional(),
    })
  );

export type CdmProductCollateralAssetCountryOfOrigin = z.infer<
  typeof CdmProductCollateralAssetCountryOfOriginSchema
>;
