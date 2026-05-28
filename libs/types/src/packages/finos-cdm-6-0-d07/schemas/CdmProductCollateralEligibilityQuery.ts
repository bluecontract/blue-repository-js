import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetTypeSchema } from './CdmBaseStaticdataAssetCommonAssetType';
import { CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonCollateralIssuerType';
import { CdmBaseStaticdataAssetCommonCurrencyCodeEnumSchema } from './CdmBaseStaticdataAssetCommonCurrencyCodeEnum';
import { CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCountryCodeEnum';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmProductCollateralAgencyRatingCriteriaSchema } from './CdmProductCollateralAgencyRatingCriteria';

export const CdmProductCollateralEligibilityQuerySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/EligibilityQuery']
  )(
    z.object({
      agencyRating: z.lazy(
        () => CdmProductCollateralAgencyRatingCriteriaSchema
      ),
      assetCountryOfOrigin: z.lazy(
        () => CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema
      ),
      collateralAssetType: z.lazy(
        () => CdmBaseStaticdataAssetCommonAssetTypeSchema
      ),
      denominatedCurrency: z.lazy(
        () => CdmBaseStaticdataAssetCommonCurrencyCodeEnumSchema
      ),
      description: z.string().optional(),
      issuerName: z.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema),
      issuerType: z.lazy(
        () => CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema
      ),
      maturity: z.number(),
      name: z.string().optional(),
    })
  );

export type CdmProductCollateralEligibilityQuery = z.infer<
  typeof CdmProductCollateralEligibilityQuerySchema
>;
