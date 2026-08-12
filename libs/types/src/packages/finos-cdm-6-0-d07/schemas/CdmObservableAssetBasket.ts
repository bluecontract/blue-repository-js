import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmObservableAssetFieldWithMetaBasketConstituentSchema } from './CdmObservableAssetFieldWithMetaBasketConstituent';

const zod = z as any;

export const CdmObservableAssetBasketSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/Basket']
)(
  zod.object({
    basketConstituent: zod
      .array(
        zod.lazy(
          (): z.ZodTypeAny =>
            CdmObservableAssetFieldWithMetaBasketConstituentSchema
        )
      )
      .min(1)
      .optional(),
    description: zod.string().optional(),
    exchange: zod
      .lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyLegalEntitySchema)
      .optional(),
    identifier: zod
      .array(
        zod.lazy(
          (): z.ZodTypeAny => CdmBaseStaticdataAssetCommonAssetIdentifierSchema
        )
      )
      .min(1)
      .optional(),
    isExchangeListed: zod.boolean().optional(),
    name: zod.string().optional(),
    relatedExchange: zod
      .array(
        zod.lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyLegalEntitySchema)
      )
      .min(0)
      .optional(),
    taxonomy: zod
      .array(
        zod.lazy((): z.ZodTypeAny => CdmBaseStaticdataAssetCommonTaxonomySchema)
      )
      .min(0)
      .optional(),
  })
);

export type CdmObservableAssetBasket = z.infer<
  typeof CdmObservableAssetBasketSchema
>;
