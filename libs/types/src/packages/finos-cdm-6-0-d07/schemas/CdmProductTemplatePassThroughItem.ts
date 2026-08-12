import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';

const zod = z as any;

export const CdmProductTemplatePassThroughItemSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/PassThroughItem']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    passThroughPercentage: zod.number(),
    payerReceiver: zod.lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema),
  })
);

export type CdmProductTemplatePassThroughItem = z.infer<
  typeof CdmProductTemplatePassThroughItemSchema
>;
