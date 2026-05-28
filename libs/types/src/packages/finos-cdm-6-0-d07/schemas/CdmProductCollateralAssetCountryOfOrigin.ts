import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCountryCodeEnum';

export const CdmProductCollateralAssetCountryOfOriginSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/AssetCountryOfOrigin']
  )(
    z.object({
      assetCountryOfOrigin: z.lazy(
        () => CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema
      ),
      name: z.string().optional(),
    })
  );

export type CdmProductCollateralAssetCountryOfOrigin = z.infer<
  typeof CdmProductCollateralAssetCountryOfOriginSchema
>;
