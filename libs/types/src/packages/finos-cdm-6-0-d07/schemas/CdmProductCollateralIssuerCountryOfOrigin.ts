import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCountryCodeEnum';

const zod = z as any;

export const CdmProductCollateralIssuerCountryOfOriginSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/IssuerCountryOfOrigin']
  )(
    zod.object({
      issuerCountryOfOrigin: zod.lazy(
        () => CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema
      ),
      name: zod.string().optional(),
    })
  );

export type CdmProductCollateralIssuerCountryOfOrigin = z.infer<
  typeof CdmProductCollateralIssuerCountryOfOriginSchema
>;
