import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPayerReceiverEnumSchema } from './CdmBaseStaticdataPartyPayerReceiverEnum';

export const CdmProductTemplateStrikeSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Strike']
)(
  z.object({
    buyer: z
      .lazy(() => CdmBaseStaticdataPartyPayerReceiverEnumSchema)
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    seller: z
      .lazy(() => CdmBaseStaticdataPartyPayerReceiverEnumSchema)
      .optional(),
    strikeRate: z.number(),
  })
);

export type CdmProductTemplateStrike = z.infer<
  typeof CdmProductTemplateStrikeSchema
>;
