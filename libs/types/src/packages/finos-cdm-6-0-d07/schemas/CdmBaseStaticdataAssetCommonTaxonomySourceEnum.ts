import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/TaxonomySourceEnum'
    ]
  )(
    z.enum([
      'CFI',
      'EMIR',
      'EU_EMIR_EligibleCollateralAssetClass',
      'ICAD',
      'ISDA',
      'MAS',
      'Other',
      'UK_EMIR_EligibleCollateralAssetClass',
      'US_CFTC_PR_EligibleCollateralAssetClass',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonTaxonomySourceEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema
>;
