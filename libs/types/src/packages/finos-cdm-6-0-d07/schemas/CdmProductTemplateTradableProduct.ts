import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryPartySchema } from './CdmBaseStaticdataPartyAncillaryParty';
import { CdmBaseStaticdataPartyCounterpartySchema } from './CdmBaseStaticdataPartyCounterparty';
import { CdmProductCommonNotionalAdjustmentEnumSchema } from './CdmProductCommonNotionalAdjustmentEnum';
import { CdmProductTemplateNonTransferableProductSchema } from './CdmProductTemplateNonTransferableProduct';
import { CdmProductTemplateTradeLotSchema } from './CdmProductTemplateTradeLot';

export const CdmProductTemplateTradableProductSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/TradableProduct']
  )(
    z.object({
      adjustment: z
        .lazy(() => CdmProductCommonNotionalAdjustmentEnumSchema)
        .optional(),
      ancillaryParty: z
        .array(z.lazy(() => CdmBaseStaticdataPartyAncillaryPartySchema))
        .min(0)
        .optional(),
      counterparty: z
        .array(z.lazy(() => CdmBaseStaticdataPartyCounterpartySchema))
        .min(2)
        .max(2)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      product: z.lazy(
        (): z.ZodTypeAny => CdmProductTemplateNonTransferableProductSchema
      ),
      tradeLot: z
        .array(z.lazy(() => CdmProductTemplateTradeLotSchema))
        .min(1)
        .optional(),
    })
  );

export type CdmProductTemplateTradableProduct = z.infer<
  typeof CdmProductTemplateTradableProductSchema
>;
