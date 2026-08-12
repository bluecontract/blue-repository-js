import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPayerReceiverEnumSchema } from './CdmBaseStaticdataPartyPayerReceiverEnum';

const zod = z as any;

export const CdmProductTemplateStrikeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Strike']
)(
  zod.object({
    buyer: zod
      .lazy(() => CdmBaseStaticdataPartyPayerReceiverEnumSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    seller: zod
      .lazy(() => CdmBaseStaticdataPartyPayerReceiverEnumSchema)
      .optional(),
    strikeRate: zod.number(),
  })
);

export type CdmProductTemplateStrike = z.infer<
  typeof CdmProductTemplateStrikeSchema
>;
