import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmObservableAssetFieldWithMetaBasketConstituentSchema } from './CdmObservableAssetFieldWithMetaBasketConstituent';

export const CdmObservableAssetBasketSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/Basket']
)(
  z.object({
    basketConstituent: z
      .array(
        z.lazy(
          (): z.ZodTypeAny =>
            CdmObservableAssetFieldWithMetaBasketConstituentSchema
        )
      )
      .min(1)
      .optional(),
    description: z.string().optional(),
    exchange: z
      .lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyLegalEntitySchema)
      .optional(),
    identifier: z
      .array(
        z.lazy(
          (): z.ZodTypeAny => CdmBaseStaticdataAssetCommonAssetIdentifierSchema
        )
      )
      .min(1)
      .optional(),
    isExchangeListed: z.boolean().optional(),
    name: z.string().optional(),
    relatedExchange: z
      .array(
        z.lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyLegalEntitySchema)
      )
      .min(0)
      .optional(),
    taxonomy: z
      .array(
        z.lazy((): z.ZodTypeAny => CdmBaseStaticdataAssetCommonTaxonomySchema)
      )
      .min(0)
      .optional(),
  })
);

export type CdmObservableAssetBasket = z.infer<
  typeof CdmObservableAssetBasketSchema
>;
