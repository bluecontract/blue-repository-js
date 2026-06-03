import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmBaseStaticdataAssetCommonAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonAssetClassEnum';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnum';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';

const zod = z as any;

export const CdmObservableAssetInflationIndexSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/InflationIndex']
)(
  zod.object({
    assetClass: zod
      .lazy(() => CdmBaseStaticdataAssetCommonAssetClassEnumSchema)
      .optional(),
    description: zod.string().optional(),
    exchange: zod
      .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
      .optional(),
    identifier: zod
      .array(zod.lazy(() => CdmBaseStaticdataAssetCommonAssetIdentifierSchema))
      .min(1)
      .optional(),
    indexTenor: zod.lazy(() => CdmBaseDatetimePeriodSchema).optional(),
    inflationRateIndex: zod.lazy(
      () => CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnumSchema
    ),
    isExchangeListed: zod.boolean().optional(),
    name: zod.string().optional(),
    provider: zod
      .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
      .optional(),
    relatedExchange: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema))
      .min(0)
      .optional(),
    taxonomy: zod
      .array(zod.lazy(() => CdmBaseStaticdataAssetCommonTaxonomySchema))
      .min(0)
      .optional(),
  })
);

export type CdmObservableAssetInflationIndex = z.infer<
  typeof CdmObservableAssetInflationIndexSchema
>;
