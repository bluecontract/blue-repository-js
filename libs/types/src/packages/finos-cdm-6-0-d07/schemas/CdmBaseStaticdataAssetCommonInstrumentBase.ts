import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema } from './CdmBaseStaticdataAssetCommonInstrumentTypeEnum';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonInstrumentBaseSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/InstrumentBase']
  )(
    zod.object({
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
      instrumentType: zod.lazy(
        () => CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema
      ),
      isExchangeListed: zod.boolean().optional(),
      name: zod.string().optional(),
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

export type CdmBaseStaticdataAssetCommonInstrumentBase = z.infer<
  typeof CdmBaseStaticdataAssetCommonInstrumentBaseSchema
>;
