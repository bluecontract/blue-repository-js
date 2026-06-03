import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonAssetClassEnum';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmObservableAssetFieldWithMetaQuotedCurrencyPairSchema } from './CdmObservableAssetFieldWithMetaQuotedCurrencyPair';
import { CdmObservableAssetInformationSourceSchema } from './CdmObservableAssetInformationSource';

const zod = z as any;

export const CdmObservableAssetForeignExchangeRateIndexSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/ForeignExchangeRateIndex']
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
        .array(
          zod.lazy(() => CdmBaseStaticdataAssetCommonAssetIdentifierSchema)
        )
        .min(1)
        .optional(),
      isExchangeListed: zod.boolean().optional(),
      name: zod.string().optional(),
      primaryFxSpotRateSource: zod.lazy(
        () => CdmObservableAssetInformationSourceSchema
      ),
      provider: zod
        .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
        .optional(),
      quotedCurrencyPair: zod.lazy(
        () => CdmObservableAssetFieldWithMetaQuotedCurrencyPairSchema
      ),
      relatedExchange: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema))
        .min(0)
        .optional(),
      secondaryFxSpotRateSource: zod
        .lazy(() => CdmObservableAssetInformationSourceSchema)
        .optional(),
      taxonomy: zod
        .array(zod.lazy(() => CdmBaseStaticdataAssetCommonTaxonomySchema))
        .min(0)
        .optional(),
    })
  );

export type CdmObservableAssetForeignExchangeRateIndex = z.infer<
  typeof CdmObservableAssetForeignExchangeRateIndexSchema
>;
