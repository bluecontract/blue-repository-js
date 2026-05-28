import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';

export const CdmProductTemplatePassThroughItemSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/PassThroughItem']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      passThroughPercentage: z.number(),
      payerReceiver: z.lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema),
    })
  );

export type CdmProductTemplatePassThroughItem = z.infer<
  typeof CdmProductTemplatePassThroughItemSchema
>;
