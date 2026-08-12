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

const zod = z as any;

export const CdmProductCollateralCollateralCriteriaSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralCriteria']
)(
  zod.object({
    AllCriteria: zod
      .lazy((): z.ZodTypeAny => CdmProductCollateralAllCriteriaSchema)
      .optional(),
    AnyCriteria: zod
      .lazy((): z.ZodTypeAny => CdmProductCollateralAnyCriteriaSchema)
      .optional(),
    AssetAgencyRating: zod
      .lazy((): z.ZodTypeAny => CdmProductCollateralAssetAgencyRatingSchema)
      .optional(),
    AssetCountryOfOrigin: zod
      .lazy((): z.ZodTypeAny => CdmProductCollateralAssetCountryOfOriginSchema)
      .optional(),
    AssetMaturity: zod
      .lazy((): z.ZodTypeAny => CdmProductCollateralAssetMaturitySchema)
      .optional(),
    AssetType: zod
      .lazy((): z.ZodTypeAny => CdmBaseStaticdataAssetCommonAssetTypeSchema)
      .optional(),
    CollateralIssuerType: zod
      .lazy(
        (): z.ZodTypeAny =>
          CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema
      )
      .optional(),
    CollateralTaxonomy: zod
      .lazy(
        (): z.ZodTypeAny => CdmBaseStaticdataAssetCommonCollateralTaxonomySchema
      )
      .optional(),
    CounterpartyOwnIssuePermitted: zod
      .lazy(
        (): z.ZodTypeAny =>
          CdmProductCollateralCounterpartyOwnIssuePermittedSchema
      )
      .optional(),
    CurrencyCodeEnum: zod
      .lazy(
        (): z.ZodTypeAny => CdmBaseStaticdataAssetCommonCurrencyCodeEnumSchema
      )
      .optional(),
    description: zod.string().optional(),
    DomesticCurrencyIssued: zod
      .lazy(
        (): z.ZodTypeAny => CdmProductCollateralDomesticCurrencyIssuedSchema
      )
      .optional(),
    Index: zod
      .lazy((): z.ZodTypeAny => CdmObservableAssetIndexSchema)
      .optional(),
    IssuerAgencyRating: zod
      .lazy((): z.ZodTypeAny => CdmProductCollateralIssuerAgencyRatingSchema)
      .optional(),
    IssuerCountryOfOrigin: zod
      .lazy((): z.ZodTypeAny => CdmProductCollateralIssuerCountryOfOriginSchema)
      .optional(),
    IssuerName: zod
      .lazy((): z.ZodTypeAny => CdmProductCollateralIssuerNameSchema)
      .optional(),
    ListingExchange: zod
      .lazy((): z.ZodTypeAny => CdmProductCollateralListingExchangeSchema)
      .optional(),
    ListingSector: zod
      .lazy((): z.ZodTypeAny => CdmProductCollateralListingSectorSchema)
      .optional(),
    name: zod.string().optional(),
    NegativeCriteria: zod
      .lazy((): z.ZodTypeAny => CdmProductCollateralNegativeCriteriaSchema)
      .optional(),
    SovereignAgencyRating: zod
      .lazy((): z.ZodTypeAny => CdmProductCollateralSovereignAgencyRatingSchema)
      .optional(),
    SpecificAsset: zod
      .lazy((): z.ZodTypeAny => CdmProductCollateralSpecificAssetSchema)
      .optional(),
  })
);

export type CdmProductCollateralCollateralCriteria = z.infer<
  typeof CdmProductCollateralCollateralCriteriaSchema
>;
