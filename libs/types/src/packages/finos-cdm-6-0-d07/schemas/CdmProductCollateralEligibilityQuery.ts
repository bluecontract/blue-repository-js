import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetTypeSchema } from './CdmBaseStaticdataAssetCommonAssetType';
import { CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonCollateralIssuerType';
import { CdmBaseStaticdataAssetCommonCurrencyCodeEnumSchema } from './CdmBaseStaticdataAssetCommonCurrencyCodeEnum';
import { CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCountryCodeEnum';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmProductCollateralAgencyRatingCriteriaSchema } from './CdmProductCollateralAgencyRatingCriteria';

const zod = z as any;

export const CdmProductCollateralEligibilityQuerySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/EligibilityQuery']
)(
  zod.object({
    agencyRating: zod.lazy(
      () => CdmProductCollateralAgencyRatingCriteriaSchema
    ),
    assetCountryOfOrigin: zod.lazy(
      () => CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema
    ),
    collateralAssetType: zod.lazy(
      () => CdmBaseStaticdataAssetCommonAssetTypeSchema
    ),
    denominatedCurrency: zod.lazy(
      () => CdmBaseStaticdataAssetCommonCurrencyCodeEnumSchema
    ),
    description: zod.string().optional(),
    issuerName: zod.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema),
    issuerType: zod.lazy(
      () => CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema
    ),
    maturity: zod.number(),
    name: zod.string().optional(),
  })
);

export type CdmProductCollateralEligibilityQuery = z.infer<
  typeof CdmProductCollateralEligibilityQuerySchema
>;
