import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonAssetClassEnum';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';

export const CdmObservableAssetOtherIndexSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/OtherIndex']
)(
  z.object({
    assetClass: z
      .lazy(() => CdmBaseStaticdataAssetCommonAssetClassEnumSchema)
      .optional(),
    description: z.string().optional(),
    exchange: z.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema).optional(),
    identifier: z
      .array(z.lazy(() => CdmBaseStaticdataAssetCommonAssetIdentifierSchema))
      .min(1)
      .optional(),
    isExchangeListed: z.boolean().optional(),
    name: z.string().optional(),
    provider: z.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema).optional(),
    relatedExchange: z
      .array(z.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema))
      .min(0)
      .optional(),
    taxonomy: z
      .array(z.lazy(() => CdmBaseStaticdataAssetCommonTaxonomySchema))
      .min(0)
      .optional(),
  })
);

export type CdmObservableAssetOtherIndex = z.infer<
  typeof CdmObservableAssetOtherIndexSchema
>;
