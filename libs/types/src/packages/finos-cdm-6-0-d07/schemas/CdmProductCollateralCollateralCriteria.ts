import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetTypeSchema } from './CdmBaseStaticdataAssetCommonAssetType';
import { CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonCollateralIssuerType';
import { CdmBaseStaticdataAssetCommonCollateralTaxonomySchema } from './CdmBaseStaticdataAssetCommonCollateralTaxonomy';
import { CdmBaseStaticdataAssetCommonCurrencyCodeEnumSchema } from './CdmBaseStaticdataAssetCommonCurrencyCodeEnum';
import { CdmObservableAssetIndexSchema } from './CdmObservableAssetIndex';
import { CdmProductCollateralAllCriteriaSchema } from './CdmProductCollateralAllCriteria';
import { CdmProductCollateralAnyCriteriaSchema } from './CdmProductCollateralAnyCriteria';
import { CdmProductCollateralAssetAgencyRatingSchema } from './CdmProductCollateralAssetAgencyRating';
import { CdmProductCollateralAssetCountryOfOriginSchema } from './CdmProductCollateralAssetCountryOfOrigin';
import { CdmProductCollateralAssetMaturitySchema } from './CdmProductCollateralAssetMaturity';
import { CdmProductCollateralCounterpartyOwnIssuePermittedSchema } from './CdmProductCollateralCounterpartyOwnIssuePermitted';
import { CdmProductCollateralDomesticCurrencyIssuedSchema } from './CdmProductCollateralDomesticCurrencyIssued';
import { CdmProductCollateralIssuerAgencyRatingSchema } from './CdmProductCollateralIssuerAgencyRating';
import { CdmProductCollateralIssuerCountryOfOriginSchema } from './CdmProductCollateralIssuerCountryOfOrigin';
import { CdmProductCollateralIssuerNameSchema } from './CdmProductCollateralIssuerName';
import { CdmProductCollateralListingExchangeSchema } from './CdmProductCollateralListingExchange';
import { CdmProductCollateralListingSectorSchema } from './CdmProductCollateralListingSector';
import { CdmProductCollateralNegativeCriteriaSchema } from './CdmProductCollateralNegativeCriteria';
import { CdmProductCollateralSovereignAgencyRatingSchema } from './CdmProductCollateralSovereignAgencyRating';
import { CdmProductCollateralSpecificAssetSchema } from './CdmProductCollateralSpecificAsset';

export const CdmProductCollateralCollateralCriteriaSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralCriteria']
  )(
    z.object({
      AllCriteria: z
        .lazy((): z.ZodTypeAny => CdmProductCollateralAllCriteriaSchema)
        .optional(),
      AnyCriteria: z
        .lazy((): z.ZodTypeAny => CdmProductCollateralAnyCriteriaSchema)
        .optional(),
      AssetAgencyRating: z
        .lazy((): z.ZodTypeAny => CdmProductCollateralAssetAgencyRatingSchema)
        .optional(),
      AssetCountryOfOrigin: z
        .lazy(
          (): z.ZodTypeAny => CdmProductCollateralAssetCountryOfOriginSchema
        )
        .optional(),
      AssetMaturity: z
        .lazy((): z.ZodTypeAny => CdmProductCollateralAssetMaturitySchema)
        .optional(),
      AssetType: z
        .lazy((): z.ZodTypeAny => CdmBaseStaticdataAssetCommonAssetTypeSchema)
        .optional(),
      CollateralIssuerType: z
        .lazy(
          (): z.ZodTypeAny =>
            CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema
        )
        .optional(),
      CollateralTaxonomy: z
        .lazy(
          (): z.ZodTypeAny =>
            CdmBaseStaticdataAssetCommonCollateralTaxonomySchema
        )
        .optional(),
      CounterpartyOwnIssuePermitted: z
        .lazy(
          (): z.ZodTypeAny =>
            CdmProductCollateralCounterpartyOwnIssuePermittedSchema
        )
        .optional(),
      CurrencyCodeEnum: z
        .lazy(
          (): z.ZodTypeAny => CdmBaseStaticdataAssetCommonCurrencyCodeEnumSchema
        )
        .optional(),
      description: z.string().optional(),
      DomesticCurrencyIssued: z
        .lazy(
          (): z.ZodTypeAny => CdmProductCollateralDomesticCurrencyIssuedSchema
        )
        .optional(),
      Index: z
        .lazy((): z.ZodTypeAny => CdmObservableAssetIndexSchema)
        .optional(),
      IssuerAgencyRating: z
        .lazy((): z.ZodTypeAny => CdmProductCollateralIssuerAgencyRatingSchema)
        .optional(),
      IssuerCountryOfOrigin: z
        .lazy(
          (): z.ZodTypeAny => CdmProductCollateralIssuerCountryOfOriginSchema
        )
        .optional(),
      IssuerName: z
        .lazy((): z.ZodTypeAny => CdmProductCollateralIssuerNameSchema)
        .optional(),
      ListingExchange: z
        .lazy((): z.ZodTypeAny => CdmProductCollateralListingExchangeSchema)
        .optional(),
      ListingSector: z
        .lazy((): z.ZodTypeAny => CdmProductCollateralListingSectorSchema)
        .optional(),
      name: z.string().optional(),
      NegativeCriteria: z
        .lazy((): z.ZodTypeAny => CdmProductCollateralNegativeCriteriaSchema)
        .optional(),
      SovereignAgencyRating: z
        .lazy(
          (): z.ZodTypeAny => CdmProductCollateralSovereignAgencyRatingSchema
        )
        .optional(),
      SpecificAsset: z
        .lazy((): z.ZodTypeAny => CdmProductCollateralSpecificAssetSchema)
        .optional(),
    })
  );

export type CdmProductCollateralCollateralCriteria = z.infer<
  typeof CdmProductCollateralCollateralCriteriaSchema
>;
