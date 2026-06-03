import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryPartySchema } from './CdmBaseStaticdataPartyAncillaryParty';
import { CdmBaseStaticdataPartyCounterpartySchema } from './CdmBaseStaticdataPartyCounterparty';
import { CdmProductCommonNotionalAdjustmentEnumSchema } from './CdmProductCommonNotionalAdjustmentEnum';
import { CdmProductTemplateNonTransferableProductSchema } from './CdmProductTemplateNonTransferableProduct';
import { CdmProductTemplateTradeLotSchema } from './CdmProductTemplateTradeLot';

const zod = z as any;

export const CdmProductTemplateTradableProductSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/TradableProduct']
)(
  zod.object({
    adjustment: zod
      .lazy(() => CdmProductCommonNotionalAdjustmentEnumSchema)
      .optional(),
    ancillaryParty: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyAncillaryPartySchema))
      .min(0)
      .optional(),
    counterparty: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyCounterpartySchema))
      .min(2)
      .max(2)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    product: zod.lazy(
      (): z.ZodTypeAny => CdmProductTemplateNonTransferableProductSchema
    ),
    tradeLot: zod
      .array(zod.lazy(() => CdmProductTemplateTradeLotSchema))
      .min(1)
      .optional(),
  })
);

export type CdmProductTemplateTradableProduct = z.infer<
  typeof CdmProductTemplateTradableProductSchema
>;
