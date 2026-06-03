import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema } from './CdmBaseStaticdataAssetCommonInstrumentTypeEnum';
import { CdmBaseStaticdataAssetCommonPutCallEnumSchema } from './CdmBaseStaticdataAssetCommonPutCallEnum';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonListedDerivativeSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/ListedDerivative'
    ]
  )(
    zod.object({
      deliveryTerm: zod.string().optional(),
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
      instrumentType: zod
        .lazy(() => CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema)
        .optional(),
      isExchangeListed: zod.boolean().optional(),
      name: zod.string().optional(),
      optionType: zod
        .lazy(() => CdmBaseStaticdataAssetCommonPutCallEnumSchema)
        .optional(),
      relatedExchange: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema))
        .min(0)
        .optional(),
      strike: zod.number().optional(),
      taxonomy: zod
        .array(zod.lazy(() => CdmBaseStaticdataAssetCommonTaxonomySchema))
        .min(0)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonListedDerivative = z.infer<
  typeof CdmBaseStaticdataAssetCommonListedDerivativeSchema
>;
