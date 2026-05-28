import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCountryCodeEnum';

export const CdmProductCollateralIssuerCountryOfOriginSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/IssuerCountryOfOrigin']
  )(
    z.object({
      issuerCountryOfOrigin: z.lazy(
        () => CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema
      ),
      name: z.string().optional(),
    })
  );

export type CdmProductCollateralIssuerCountryOfOrigin = z.infer<
  typeof CdmProductCollateralIssuerCountryOfOriginSchema
>;
